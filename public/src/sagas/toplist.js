import {put,call,take,fork} from 'redux-saga/effects'
import Api from '../api'

const getTopList = function* (){
	while(true){
		try{
			const action = yield take('GET_TOPLIST_REQUEST')
			const result = yield call(Api.getToplist)
			if(result){
				const {rank:{list,total}} = result
				yield put({
					type:'INIT_TOPLIST_LIST',
					data:list
				})
			}
		}catch(err){
			console.error(err)
		}
	}
}
const getRankList = function* (){
	while(true){
		try{
			const action = yield take('GET_RANK_LIST_REQUEST')
			const result = yield call(Api.getRankList,action.id)
			if(result){
				const {songs:{list},info:{imgurl,rankname,update_frequency:time}} = result
				yield put({
					type:'INIT_RANK',
					rankname,
					time,
					list,
					banner:imgurl.replace(/{size}/g,400)
				})
			}
		}catch(err){
			console.error(err)
		}
	}
}

export default function* toplistAction(){
	yield fork(getTopList)
	yield fork(getRankList)
}
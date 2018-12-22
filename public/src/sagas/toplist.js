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
		const action = yield take('GET_RANK_LIST_REQUEST')
		try{
			const result = yield call(Api.getRankList,action.id,action.page)
			if(result){
				const {songs:{list,total},info:{imgurl,rankname,update_frequency:time}} = result
				yield put({
					type:'UPDATE_RANK_LIST',
					data:{
						rankname,
						total,
						time,
						page:action.page + 1,
						lists:list,
						banner:imgurl.replace(/{size}/g,640)
					}
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_RANK_LIST',
				data:{
					page:action.page,
					lists:[]
				}
			})
			console.error(err)
		}
	}
}

export default function* toplistAction(){
	yield fork(getTopList)
	yield fork(getRankList)
}
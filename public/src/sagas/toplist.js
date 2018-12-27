import {put,call,take,fork} from 'redux-saga/effects'
import Api from '../api'

const getTopList = function* (){
	while(true){
		try{
			const action = yield take('GET_TOPLIST_REQUEST')
			const result = yield call(Api.getToplist)
			if(result){
				const {rank:{list}} = result
				yield put({
					type:'SAVE_TOPLIST',
					payload:list
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
			const result = yield call(Api.getRankList,action.payload)
			if(result){
				const {songs:{list,total},info:{imgurl,rankname,update_frequency:time}} = result
				yield put({
					type:'SAVE_RANK_LIST',
					payload:{
						rankname,
						total,
						time,
						list,
						banner:imgurl.replace(/{size}/g,640)
					}
				})
			}
		}catch(err){
			yield put({
				type:'SAVE_RANK_LIST',
				payload:{
					list:[]
				}
			})
			console.error(err)
		}
	}
}
const loadRankList = function* (){
	while(true){
		const action = yield take('LOAD_RANK_LIST_REQUEST')
		try{
			const result = yield call(Api.getRankList,action.payload)
			if(result){
				const {songs:{list,total},info:{imgurl,rankname,update_frequency:time}} = result
				yield put({
					type:'UPDATE_RANK_LIST',
					payload:{
						rankname,
						total,
						time,
						page:action.payload.page,
						list,
						banner:imgurl.replace(/{size}/g,640)
					}
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_RANK_LIST',
				payload:{
					list:[]
				}
			})
			console.error(err)
		}
	}
}
export default function* toplistAction(){
	yield fork(getTopList)
	yield fork(getRankList)
	yield fork(loadRankList)
}
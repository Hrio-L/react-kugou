import {put,take,call,fork} from 'redux-saga/effects'
import Api from '../api'

const getHots = function* (){
	while(true){
		try{
			const action = yield take('GET_HOT_SEARCH_LIST')
			const result = yield call(Api.getHotSearch)
			if(result){
				const {data:{info}} = result
				yield put({
					type:'SAVE_HOT_LIST',
					payload:info
				})
			}
		}catch(err){
			console.error(err.message)
		}
	}
}

const search = function* (){
	while(true){
			const action = yield take('SEARCH_REQUEST')
		try{
			const result = yield call(Api.search,action.payload)
			if(result){
				const {data:{info,total}} = result
				yield put({
					type:'SAVE_SEARCH_RESULT',
					payload:{
						list:info,
						total
					}
				})
				yield put({
					type:'ADD_HISTORY_ITEM',
					payload:action.keyword
				})
			}
		}catch(err){
			yield put({
				type:'SAVE_SEARCH_RESULT',
				payload:{
					list:[]
				}
			})
			console.error(err.message)
		}
	}
}
const loadResult = function* (){
	while(true){
			const action = yield take('LOAD_RESULT_REQUEST')
		try{
			const result = yield call(Api.search,action.payload)
			if(result){
				const {data:{info,total}} = result
				yield put({
					type:'UPDATE_SEARCH_RESULT',
					payload:{
						list:info,
						total,
						page:action.payload.page
					}
				})
				yield put({
					type:'ADD_HISTORY_ITEM',
					payload:action.keyword
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_SEARCH_RESULT',
				payload:{
					list:[]
				}
			})
			console.error(err.message)
		}
	}
}
export default function* searchAction(){
	yield fork(getHots)
	yield fork(search)
	yield fork(loadResult)
}
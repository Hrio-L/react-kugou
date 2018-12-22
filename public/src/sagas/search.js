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
					type:'INIT_HOT_SEARCH_LIST',
					data:info
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
			const result = yield call(Api.search,action.keyword,action.page)
			if(result){
				const {data:{info,total}} = result
				yield put({
					type:'UPDATE_SEARCH_RESULT',
					data:{
						lists:info,
						total,
						page:action.page
					}
				})
				yield put({
					type:'ADD_HISTORY_ITEM',
					keyword:action.keyword
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_SEARCH_RESULT',
				data:{
					page:action.page
				}
			})
			yield put({
				type:'ADD_HISTORY_ITEM',
				keyword:action.keyword
			})
			console.error(err.message)
		}
	}
}

export default function* searchAction(){
	yield fork(getHots)
	yield fork(search)
}
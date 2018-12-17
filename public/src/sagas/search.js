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
		try{
			const action = yield take('SEARCH_REQUEST')
			const result = yield call(Api.search,action.keyword)
			if(result){
				console.log(result)
				yield put({
					type:'ADD_HISTORY_ITEM',
					id:Math.random().toString(36).substr(2),
					keyword:action.keyword
				})
			}
		}catch(err){
			console.error(err.message)
		}
	}
}

export default function* searchAction(){
	yield fork(getHots)
	yield fork(search)
}
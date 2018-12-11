import {put,call,take,fork} from 'redux-saga/effects'
import Api from '../api'

const getList = function* (){
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

export default function* toplistAction(){
	yield fork(getList)
}
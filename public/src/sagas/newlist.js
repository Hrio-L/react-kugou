import {take,put,call,fork} from 'redux-saga/effects'
import Api from '../api'

const getList = function* (){
	while(true){
		try{
			const action = yield take('GET_NEWLIST_REQUEST')
			const result = yield call(Api.getNewlist)
			if(result){
				yield put({
					type:'INIT_NEWLIST_SONGS',
					data:result.data
				})
			}
		}catch(err){
			console.error(err)
		}
	}
}


export default function* newlistAction(){
	yield fork(getList)
}
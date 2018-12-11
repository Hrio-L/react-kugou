import {put,call,take,fork} from 'redux-saga/effects'
import Api from '../api'

const getList = function* (){
	while(true){
		try{
			const action = yield take('GET_PLIST_REQUEST')
			const result = yield call(Api.getPlist)
			if(result){
				const {plist:{list:{info,total},pagesize}} = result
				yield put({
					type:'INIT_PLIST_LIST',
					data:info
				})
			}
		}catch(err){
			console.error(err.message)
		}
	}
}

export default function* plistAction(){
	yield fork(getList)
}
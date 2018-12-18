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

const getDetail = function* (){
	while(true){
		try{
			const action = yield take('GET_PLIST_DETAIL_REQUEST')
			const result = yield call(Api.getPlistDetail,action.id)
			if(result){
				const {list:{list:{info}},info:{list:{specialname,imgurl}}} = result
				yield put({
					type:'INIT_PLIST_DETAIL',
					list:info,
					specialname,
					banner:imgurl.replace(/{size}/g,400)
				})
			}
		}catch(err){
			console.error(err.message)
		}
	}
}

export default function* plistAction(){
	yield fork(getList)
	yield fork(getDetail)
}
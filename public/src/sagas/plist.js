import {put,call,take,fork} from 'redux-saga/effects'
import Api from '../api'

const getList = function* (){
	while(true){
		const action = yield take('GET_PLIST_REQUEST')
		try{
			const result = yield call(Api.getPlist,action.page)
			if(result){
				const {plist:{list:{info,total},pagesize}} = result
				yield put({
					type:'UPDATE_PLIST_LIST',
					lists:info,
					page:action.page + 1,
					total
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_PLIST_LIST',
				lists:[],
				page:action.page
			})
			console.error(err.message)
		}
	}
}

const getDetail = function* (){
	while(true){
		const action = yield take('GET_PLIST_DETAIL_REQUEST')
		try{
			const result = yield call(Api.getPlistDetail,action.id,action.page)
			if(result){
				const {list:{list:{total,info}},info:{list:{specialname,imgurl,intro}}} = result
				yield put({
					type:'UPDATE_PLIST_DETAIL_LIST',
					lists:info,
					total,
					specialname,
					intro,
					banner:imgurl.replace(/{size}/g,400),
					page:action.page + 1
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_PLIST_DETAIL_LIST',
				lists:[],
				page:action.page
			})
			console.error(err.message)
		}
	}
}

export default function* plistAction(){
	yield fork(getList)
	yield fork(getDetail)
}
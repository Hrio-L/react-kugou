import {put,call,take,fork} from 'redux-saga/effects'
import Api from '../api'

const getList = function* (){
	while(true){
		const action = yield take('GET_PLIST_REQUEST')
		try{
			const result = yield call(Api.getPlist,action.page)
			if(result){
				const {plist:{list:{info,total},pagesize}} = result
				if(action.page === 1){
					yield put({
						type:'INIT_PLIST_LIST',
						data:info,
						total,
						page:action.page + 1
					})
				}else{
					yield put({
						type:'UPDATE_PLIST_LIST',
						data:info,
						page:action.page + 1,
						total
					})
				}
			}
		}catch(err){
			yield put({
				type:'UPDATE_PLIST_LIST',
				data:[],
				page:action.page
			})
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
				const {list:{list:{info}},info:{list:{specialname,imgurl,intro}}} = result
				
				yield put({
					type:'INIT_PLIST_DETAIL',
					list:info,
					specialname,
					intro,
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
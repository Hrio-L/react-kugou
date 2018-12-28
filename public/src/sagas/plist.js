import {put,call,take,fork} from 'redux-saga/effects'
import Api from '../api'
import {handleError} from '../common/basehandler'


const getList = function* (){
	while(true){
		const action = yield take('GET_PLIST_REQUEST')
		try{
			const result = yield call(Api.getPlist,action.payload)
			if(result){
				const {plist:{list:{info,total},pagesize}} = result
				yield put({
					type:'SAVE_PLIST',
					payload:{
						list:info,
						total
					}
				})
			}
		}catch(err){
			yield put({
				type:'SAVE_PLIST',
				payload:{
					list:[]
				}
			})
			handleError(err)
		}
	}
}
const loadList = function* (){
	while(true){
		const action = yield take('LOAD_PLIST_REQUEST')
		try{
			const result = yield call(Api.getPlist,action.payload)
			if(result){
				const {plist:{list:{info,total},pagesize}} = result
				yield put({
					type:'UPDATE_PLIST_LIST',
					payload:{
						list:info,
						page:action.payload.page,
						total
					}
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_PLIST_LIST',
				payload:{
					list:[]
				}
			})
			handleError(err)
		}
	}
}
const getDetail = function* (){
	while(true){
		const action = yield take('GET_PLIST_DETAIL_REQUEST')
		try{
			const result = yield call(Api.getPlistDetail,action.payload)
			if(result){
				const {list:{list:{total,info}},info:{list:{specialname,imgurl,intro}}} = result
				yield put({
					type:'SAVE_PLIST_DETAIL',
					payload:{
						list:info,
						total,
						specialname,
						intro,
						banner:imgurl.replace(/{size}/g,400),
					}
				})
			}
		}catch(err){
			yield put({
				type:'SAVE_PLIST_DETAIL',
				payload:{
					list:[]
				}
			})
			handleError(err)
		}
	}
}
const loadDetail = function* (){
	while(true){
		const action = yield take('LOAD_PLIST_DETAIL_REQUEST')
		try{
			const result = yield call(Api.getPlistDetail,action.payload)
			if(result){
				const {list:{list:{total,info}},info:{list:{specialname,imgurl,intro}}} = result
				yield put({
					type:'UPDATE_PLIST_DETAIL_LIST',
					payload:{
						list:info,
						total,
						specialname,
						intro,
						banner:imgurl.replace(/{size}/g,400),
						page:action.payload.page
					}
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_PLIST_DETAIL_LIST',
				payload:{
					list:[]
				}
			})
			handleError(err)
		}
	}
}
export default function* plistAction(){
	yield fork(getList)
	yield fork(loadList)
	yield fork(getDetail)
	yield fork(loadDetail)
}
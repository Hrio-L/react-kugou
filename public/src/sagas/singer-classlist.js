import {put,call,take,fork} from 'redux-saga/effects'
import Api from '../api'

const getClassList = function* (){
	while(true){
		try{
			const action = yield take('GET_SINGER_CLASSLIST_REQUEST')
			const result = yield call(Api.getSingerClasslist)
			if(result){
				const {list} = result
				yield put({
					type:'SAVE_SINGER_CLASS',
					payload:list
				})
			}
		}catch(err){
			console.error(err.message)
		}
	}
}

const getSingerList = function* (){
	while(true){
		const action = yield take('GET_SINGER_LIST_REQUEST')
		try{
			const result = yield call(Api.getSingerList,action.payload)
			if(result){
				const {classname,singers:{list:{info,total}}} = result
				yield put({
					type:'SAVE_SINGER_LIST',
					payload:{
						list:info,
						classname,
						total
					}
				})
			}
		}catch(err){
			yield put({
				type:'SAVE_SINGER_LIST',
				payload:{
					list:[]
				}
			})
			console.error(err.message)
		}
	}
}
const loadSingerList = function* (){
	while(true){
		const action = yield take('LOAD_SINGER_LIST_REQUEST')
		try{
			const result = yield call(Api.getSingerList,action.payload)
			if(result){
				const {classname,singers:{list:{info,total}}} = result
				yield put({
					type:'UPDATE_SINGER_LIST',
					payload:{
						list:info,
						classname,
						page:action.payload.page ,
						total
					}
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_SINGER_LIST',
				payload:{
					list:[]
				}
			})
			console.error(err.message)
		}
	}
}
const getSongsList = function* (){
	while(true){
		const action = yield take('GET_SINGER_SONGS_LIST_REQUEST')
		try{
			const result = yield call(Api.getSingerSongsList,action.payload)
			if(result){
				const {info:{singername:singerName,imgurl,intro},songs:{list,total}} = result
				yield put({
					type:'SAVE_SONGS_LIST',
					payload:{
						list,
						total,
						intro,
						banner:imgurl.replace(/{size}/g,200),
						singerName
					}
				})
			}
		}catch(err){
			yield put({
				type:'SAVE_SONGS_LIST',
				payload:{
					list:[]
				}
			})
			console.error(err.message)
		}
	}
}
const loadSongsList = function* (){
	while(true){
		const action = yield take('LOAD_SONGS_LIST_REQUEST')
		try{
			const result = yield call(Api.getSingerSongsList,action.payload)
			if(result){
				const {info:{singername:singerName,imgurl,intro},songs:{list,total}} = result
				yield put({
					type:'UPDATE_SONGS_LIST',
					payload:{
						list:list,
						total,
						intro,
						banner:imgurl.replace(/{size}/g,200),
						singerName,
						page:action.payload.page
					}
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_SONGS_LIST',
				payload:{
					list:[]
				}
			})
			console.error(err.message)
		}
	}
}

export default function* singerClasslistAction(){
	yield fork(getClassList)
	yield fork(getSingerList)
	yield fork(loadSingerList)
	yield fork(getSongsList)
	yield fork(loadSongsList)
}
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
					type:'INIT_SINGER_CLASSLIST',
					data:list
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
			const result = yield call(Api.getSingerList,action.id,action.page)
			if(result){
				const {classname,singers:{list:{info,total}}} = result
				yield put({
					type:'UPDATE_SINGER_LIST',
					data:{
						lists:info,
						classname,
						page:action.page + 1,
						total
					}
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_SINGER_LIST',
				data:{
					lists:[],
					page:action.page
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
			const result = yield call(Api.getSingerSongsList,action.id,action.page)
			if(result){
				const {info:{singername:singerName,imgurl,intro},songs:{list,total}} = result
				yield put({
					type:'UPDATE_SINGER_SONGS',
					data:{
						lists:list,
						total,
						intro,
						banner:imgurl.replace(/{size}/g,200),
						singerName,
						page:action.page + 1
					}
				})
			}
		}catch(err){
			yield put({
				type:'UPDATE_SINGER_SONGS',
				data:{
					lists:[],
					page:action.page
				}
			})
			console.error(err.message)
		}
	}
}

export default function* singerClasslistAction(){
	yield fork(getClassList)
	yield fork(getSingerList)
	yield fork(getSongsList)
}
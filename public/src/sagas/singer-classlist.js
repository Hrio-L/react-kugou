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
		try{
			const action = yield take('GET_SINGER_LIST_REQUEST')
			const result = yield call(Api.getSingerList,action.id)
			if(result){
				const {classname,singers:{list:{info}}} = result
				yield put({
					type:'INIT_SINGER_LIST',
					list:info,
					classname
				})
			}
		}catch(err){
			console.error(err.message)
		}
	}
}
const getSongsList = function* (){
	while(true){
		try{
			const action = yield take('GET_SINGER_SONGS_LIST_REQUEST')
			const result = yield call(Api.getSingerSongsList,action.id)
			if(result){
				const {info:{singername:singerName,imgurl},songs:{list}} = result
				yield put({
					type:'INIT_SINGER',
					list,
					banner:imgurl.replace(/{size}/g,200),
					singerName
				})
			}
		}catch(err){
			console.error(err.message)
		}
	}
}

export default function* singerClasslistAction(){
	yield fork(getClassList)
	yield fork(getSingerList)
	yield fork(getSongsList)
}
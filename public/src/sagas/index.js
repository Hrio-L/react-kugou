import {take,all,call,fork,put} from 'redux-saga/effects'
import newlistAction from './newlist'
import toplistAction from './toplist'
import plistAction from './plist'
import singerClasslistAction from './singer-classlist'
import searchAction from './search'
import Api from '../api'

const watch = function* (){
	while(true){
		try{
			const action = yield take('*')
			console.log(action)
		}catch(err){
			console.error(err.message)
		}
	}
}

const getSongDetail = function* (){
	while(true){
		try{
			const action = yield take('GET_SONG_DETAIL_REQUEST')
			const result = yield call(Api.getSongDetail,action.payload)
			if(result){
				const {data:{song_name:name,timelength,img,lyrics,play_url:music,author_name:author}} = result
				if(music){
					yield put({
						type:'SAVE_SONG_DETAIL',
						payload:{
							name,
							timelength,
							img,
							lyrics,
							author,
							music,
							id:action.payload.hash
						}
					})
					yield put({
						type:'UPDATE_PLAYING_LIST',
						payload:{
							id:action.payload.hash,
							author,
							name
						}
					})
				}else{
					console.log('no work')
				}
			}
		}catch(err){
			console.error(err.mesage)
		}
	}
}


const indexAction = function* (){
	yield fork(getSongDetail)
}



export default function* rootSaga(){
	yield all([
		watch(),
		indexAction(),
		newlistAction(),
		toplistAction(),
		plistAction(),
		singerClasslistAction(),
		searchAction()
	])
}
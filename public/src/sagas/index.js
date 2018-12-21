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
			const result = yield call(Api.getSongDetail,action.hash)
			if(result){
				const {data:{song_name:name,timelength,img,lyrics,play_url:music,author_name:author}} = result
				yield put({
					type:'UPDATE_SONG_DETAIL',
					name,
					timelength,
					img,
					lyrics,
					author,
					music,
					id:action.hash
				})
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
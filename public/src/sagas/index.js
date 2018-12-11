import {take,all} from 'redux-saga/effects'
import newlistAction from './newlist'
import toplistAction from './toplist'
import plistAction from './plist'
import singerClasslistAction from './singer-classlist'

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




export default function* rootSaga(){
	yield all([
		watch(),
		newlistAction(),
		toplistAction(),
		plistAction(),
		singerClasslistAction()
	])
}
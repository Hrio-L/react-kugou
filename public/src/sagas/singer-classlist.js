import {put,call,take,fork} from 'redux-saga/effects'
import Api from '../api'

const getList = function* (){
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

export default function* singerClasslistAction(){
	yield fork(getList)
}
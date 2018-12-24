import {combineReducers} from 'redux'
import menus from './menus'
import newlist from './newlist'
import toplist from './toplist'
import plist from './plist'
import singerClasslist from './singer-classlist'
import search from './search'

const UPDATE_SONG_DETAIL = 'UPDATE_SONG_DETAIL'
const UPDATE_PLAYING_LIST = 'UPDATE_PLAYING_LIST'
const REMOVE_PLAYING_ITEM = 'REMOVE_PLAYING_ITEM'

const getHistoryLists = () => {
	const list = localStorage.getItem('myLists') 
	const myLists = list ? JSON.parse(list) : []
	return myLists
}
const setMyLists = (myLists,item) => {
	let newMyLists = myLists	
	if(item){
		const filterMyLists = myLists.filter(d => d.id === item.id)
		if(!filterMyLists.length){
			newMyLists = [...myLists,item]
		}
	}
	localStorage.setItem('myLists',JSON.stringify(newMyLists))
	return newMyLists
}


const initialState = {
	title:'Music',
	playing:{
		id:'',
		author:'kugou',
		music:'',
		name:'Hello Kugou',
		timelength:0,
		img:'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
		lists:getHistoryLists(),
		lyrics:'',
		error:false
	}
}




const rootState = (state = initialState,action) => {
	switch(action.type){
		case UPDATE_SONG_DETAIL:
			return {...state,playing:{...state.playing,...action.data}}
		case UPDATE_PLAYING_LIST:
			return {...state,playing:{...state.playing,lists:setMyLists(state.playing.lists,action.item)}}
		case REMOVE_PLAYING_ITEM:
			const filterMyLists = state.playing.lists.filter(d => d.id !== action.id)
			return {...state,playing:{...state.playing,lists:setMyLists(filterMyLists)}}
		default :
			return {...state}
	}
}


export default combineReducers({
	rootState,
	menus,
	newlist,
	toplist,
	plist,
	singerClasslist,
	search
})
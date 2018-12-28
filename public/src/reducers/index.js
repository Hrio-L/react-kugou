import {combineReducers} from 'redux'
import menus from './menus'
import newlist from './newlist'
import toplist from './toplist'
import plist from './plist'
import singerClasslist from './singer-classlist'
import search from './search'

const SAVE_SONG_DETAIL = 'SAVE_SONG_DETAIL'
const UPDATE_PLAYING_LIST = 'UPDATE_PLAYING_LIST'
const REMOVE_PLAYING_ITEM = 'REMOVE_PLAYING_ITEM'
const UPDATE_PLAYING_METHOD = 'UPDATE_PLAYING_METHOD'
const INIG_PLAYING_LIST = 'INIG_PLAYING_LIST'

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

const lastMusic = localStorage.getItem('lastMusic') ? JSON.parse(localStorage.getItem('lastMusic')) : ''

const initialState = {
	title:'Music',
	playing:{
		id:'',
		author:'kugou',
		music:'',
		name:'Hello Kugou',
		timelength:0,
		img:'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
		list:getHistoryLists(),
		lyrics:'',
		error:false,
		playMethod:'loop',
		lastMusic:lastMusic
	}
}




const rootState = (state = initialState,action) => {
	switch(action.type){
		case SAVE_SONG_DETAIL:
			return {
				...state,
				playing:{
					...state.playing,
					id:action.payload.id,
					author:action.payload.author,
					music:action.payload.music,
					name:action.payload.name,
					timelength:action.payload.timelength,
					img:action.payload.img,
					lyrics:action.payload.lyrics
				}
			}
		case UPDATE_PLAYING_LIST:
			localStorage.setItem('lastMusic',JSON.stringify(action.payload.id))
			return {
				...state,
				playing:{
					...state.playing,
					list:setMyLists(state.playing.list,action.payload)
				}
			}
		case REMOVE_PLAYING_ITEM:
			const filterMyLists = state.playing.list.filter(d => d.id !== action.payload)
			return {
				...state,
				playing:{
					...state.playing,
					list:setMyLists(filterMyLists)
				}
			}
		case UPDATE_PLAYING_METHOD:
			return {
				...state,
				playing:{
					...state.playing,
					playMethod:action.payload
				}
			}
		case INIG_PLAYING_LIST:
			return {
				...state,
				playing:{
					...state.playing,
					list:setMyLists([])
				}
			}
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
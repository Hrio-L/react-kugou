import {combineReducers} from 'redux'
import menus from './menus'
import newlist from './newlist'
import toplist from './toplist'
import plist from './plist'
import singerClasslist from './singer-classlist'
import search from './search'

const UPDATE_SONG_DETAIL = 'UPDATE_SONG_DETAIL'

const initialState = {
	title:'Music',
	playing:{
		id:'',
		author:'',
		music:'',
		name:'Hello Kugou',
		timelength:0,
		img:'',
		lists:[],
		lyrics:'',
		error:false
	}
}

const rootState = (state = initialState,action) => {
	switch(action.type){
		case UPDATE_SONG_DETAIL:
			return {...state,playing:{...state.playing,...action.data}}
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
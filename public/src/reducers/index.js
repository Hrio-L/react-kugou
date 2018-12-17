import {combineReducers} from 'redux'
import menus from './menus'
import newlist from './newlist'
import toplist from './toplist'
import plist from './plist'
import singerClasslist from './singer-classlist'
import search from './search'

const initialState = {
	title:'Music'
}


const rootState = (state = initialState,action) => {
	switch(action.type){
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
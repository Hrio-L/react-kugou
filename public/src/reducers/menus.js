const UPDATE_MENU_SELECTED = 'UPDATE_MENU_SELECTED'

const initialState = {
	selected:[],
	data:[{
		name:'新歌',
		path:'/newlist',
		key:'/newlist'
	},{
		name:'排行',
		path:'/toplist',
		key:'/toplist'
	},{
		name:'歌单',
		path:'/plist',
		key:'/plist'
	},{
		name:'歌手',
		path:'/singer-classlist',
		key:'/singer-classlist'
	}]
}


const menus = (state = initialState,action) => {
	switch(action.type){
		case UPDATE_MENU_SELECTED:
			return {...state,selected:[...state.selected,action.selected]}
		default:
			return state
	}
}


export default menus
const UPDATE_MENU_SELECTED = 'UPDATE_MENU_SELECTED'

const initialState = {
	selected:[],
	data:[{
		name:'新歌',
		path:'/basic/newlist',
		key:'/basic/newlist'
	},{
		name:'排行',
		path:'/basic/toplist',
		key:'/basic/toplist'
	},{
		name:'歌单',
		path:'/basic/plist',
		key:'/basic/plist'
	},{
		name:'歌手',
		path:'/basic/singer-classlist',
		key:'/basic/singer-classlist'
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
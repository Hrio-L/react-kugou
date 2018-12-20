const INIT_PLIST_LIST = 'INIT_PLIST_LIST'
const UPDATE_PLIST_LIST = 'UPDATE_PLIST_LIST'
const INIT_PLIST_DETAIL = 'INIT_PLIST_DETAIL'
const UPDATE_PLIST_DETAIL_LIST = 'UPDATE_PLIST_DETAIL_LIST'
const CHANGE_PLIST_LOADING_STATE = 'CHANGE_PLIST_LOADING_STATE'
const CHANGE_PLIST_DETAIL_LOADING_STATE = 'CHANGE_PLIST_DETAIL_LOADING_STATE'

const initialState = {
	loading:false,
	total:0,
	lists:[],
	page:1,
	detail:{
		loading:false,
		total:0,
		page:1,
		banner:'',
		specialname:'',
		intro:'',
		lists:[]
	}
}

const plist = (state = initialState,action) => {
	switch(action.type){
		case CHANGE_PLIST_LOADING_STATE:
			return {...state,loading:action.loading}
		case CHANGE_PLIST_DETAIL_LOADING_STATE:
			return {...state,detail:{...state.detail,loading:action.loading}}
		case INIT_PLIST_DETAIL:
			return {...state,detail:{...initialState.detail}}
		case UPDATE_PLIST_DETAIL_LIST:
			const {lists:detailLists,...detailRest} = action
			return {...state,detail: {lists:[...state.detail.lists,...detailLists],...detailRest,loading:false}}
		case UPDATE_PLIST_LIST:
			const {lists:plistLists,...plistRest} = action
			return {...state,lists:[...state.lists,...plistLists],...plistRest,loading:false}
		default:
			return state
	}
}

export default plist
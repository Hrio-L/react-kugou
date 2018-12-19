const INIT_PLIST_LIST = 'INIT_PLIST_LIST'
const UPDATE_PLIST_LIST = 'UPDATE_PLIST_LIST'
const INIT_PLIST_DETAIL = 'INIT_PLIST_DETAIL'
const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE'

const initialState = {
	loading:false,
	total:0,
	lists:[],
	page:1,
	detail:{
		banner:'',
		specialname:'',
		intro:'',
		lists:[]
	}
}

const plist = (state = initialState,action) => {
	switch(action.type){
		case CHANGE_LOADING_STATE:
			return {...state,loading:action.loading}
		case INIT_PLIST_DETAIL:
			const {banner,list,specialname,intro} = action
			return {...state,detail:{banner,lists:list,specialname,intro}}
		case INIT_PLIST_LIST:
			return {...state,lists:[...action.data],total:action.total,page:action.page}
		case UPDATE_PLIST_LIST:
			return {...state,lists:[...state.lists,...action.data],page:action.page,loading:false,total:action.total}
		default:
			return state
	}
}

export default plist
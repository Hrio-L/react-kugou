const SAVE_PLIST = 'SAVE_PLIST'
const UPDATE_PLIST_LIST = 'UPDATE_PLIST_LIST'
const SAVE_PLIST_DETAIL = 'SAVE_PLIST_DETAIL'
const INIT_PLIST_DETAIL = 'INIT_PLIST_DETAIL'
const UPDATE_PLIST_DETAIL_LIST = 'UPDATE_PLIST_DETAIL_LIST'
const CHANGE_PLIST_LOADING_STATE = 'CHANGE_PLIST_LOADING_STATE'
const CHANGE_PLIST_DETAIL_LOADING_STATE = 'CHANGE_PLIST_DETAIL_LOADING_STATE'

const initialState = {
	loading:false,
	total:0,
	list:[],
	page:1,
	detail:{
		loading:false,
		total:0,
		page:1,
		banner:'',
		specialname:'',
		intro:'',
		list:[]
	}
}

const plist = (state = initialState,action) => {
	switch(action.type){
		case SAVE_PLIST:
			return {
				...state,
				list:action.payload.list,
				total:action.payload.total
			}
		case UPDATE_PLIST_LIST:
			const {list:plistLists,...plistRest} = action.payload
			return {
				...state,
				list:[...state.list,...plistLists],
				...plistRest,
				loading:false
			}
		case SAVE_PLIST_DETAIL:
			return {
				...state,
				detail:{
					...state.detail,
					list:action.payload.list,
					total:action.payload.total,
					banner:action.payload.banner,
					specialname:action.payload.specialname,
					intro:action.payload.intro
				}
			}
		case UPDATE_PLIST_DETAIL_LIST:
			const {list:detailLists,...detailRest} = action.payload
			return {
				...state,
				detail: {
					list:[
						...state.detail.list,
						...detailLists
					],
					...detailRest,
					loading:false
				}
			}
		case INIT_PLIST_DETAIL:
			return {
				...state,
				detail:initialState.detail
			}
		case CHANGE_PLIST_LOADING_STATE:
			return {
				...state,
				loading:action.payload
			}
		case CHANGE_PLIST_DETAIL_LOADING_STATE:
			return {
				...state,
				detail:{
					...state.detail,
					loading:action.payload
				}
			}
		default:
			return state
	}
}

export default plist
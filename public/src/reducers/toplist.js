const INIT_TOPLIST_LIST = 'INIT_TOPLIST_LIST'
const INIT_RANK_LIST = 'INIT_RANK_LIST'
const UPDATE_RANK_LIST='UPDATE_RANK_LIST'
const CHANGE_RANK_LOADING_STATE = 'CHANGE_RANK_LOADING_STATE'

const initialState = {
	lists:[],
	rank:{
		loading:false,
		total:0,
		page:1,
		banner:'',
		rankname:'',
		lists:[]
	}
}

const toplist = (state = initialState,action) => {
	switch(action.type){
		case CHANGE_RANK_LOADING_STATE:
			return {...state,rank:{...state.rank,loading:action.loading}}
		case INIT_TOPLIST_LIST:
			return {...state,lists:[...action.data],total:action.total}
		case INIT_RANK_LIST:
			return {...state,rank:{...initialState.rank}}
		case UPDATE_RANK_LIST:
			const {lists:rankLists,...rankRest} = action
			return {...state,rank:{loading:false,lists:[...state.rank.lists,...rankLists],...rankRest}}
		default:
			return state
	}
}

export default toplist
const SAVE_TOPLIST = 'SAVE_TOPLIST'
const INIT_RANK_LIST = 'INIT_RANK_LIST'
const UPDATE_RANK_LIST='UPDATE_RANK_LIST'
const SAVE_RANK_LIST='SAVE_RANK_LIST'
const CHANGE_RANK_LOADING_STATE = 'CHANGE_RANK_LOADING_STATE'

const initialState = {
	list:[],
	rank:{
		loading:false,
		total:0,
		page:1,
		banner:'',
		rankname:'',
		list:[]
	}
}

const toplist = (state = initialState,action) => {
	switch(action.type){
		case SAVE_TOPLIST:
			return {
				...state,
				list:action.payload,
			}
		case SAVE_RANK_LIST:
			return {
				...state,
				rank:{
					...state.rank,
					list:action.payload.list,
					total:action.payload.total,
					banner:action.payload.banner,
					rankname:action.payload.rankname
				}
			}
		case UPDATE_RANK_LIST:
			const {list:rankList,...rankRest} = action.payload
			return {
				...state,
				rank:{
					...state.rank,
					loading:false,
					list:[...state.rank.list,...rankList],
					...rankRest
				}
			}
		case CHANGE_RANK_LOADING_STATE:
			return {
				...state,
				rank:{
					...state.rank,
					loading:action.payload
				}
			}
		case INIT_RANK_LIST:
			return {
				...state,
				rank:initialState.rank
			}
		
		default:
			return state
	}
}

export default toplist
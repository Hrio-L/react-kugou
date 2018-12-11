const INIT_TOPLIST_LIST = 'INIT_TOPLIST_LIST'

const initialState = {
	lists:[]
}

const toplist = (state = initialState,action) => {
	switch(action.type){
		case INIT_TOPLIST_LIST:
			return {...state,lists:[...action.data]}
		default:
			return state
	}
}

export default toplist
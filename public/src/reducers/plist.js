const INIT_PLIST_LIST = 'INIT_PLIST_LIST'

const initialState = {
	lists:[]
}

const plist = (state = initialState,action) => {
	switch(action.type){
		case INIT_PLIST_LIST:
			return {...state,lists:[...action.data]}
		default:
			return state
	}
}

export default plist
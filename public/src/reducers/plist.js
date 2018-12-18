const INIT_PLIST_LIST = 'INIT_PLIST_LIST'
const INIT_PLIST_DETAIL = 'INIT_PLIST_DETAIL'

const initialState = {
	lists:[],
	detail:{
		banner:'',
		specialname:'',
		lists:[]
	}
}

const plist = (state = initialState,action) => {
	switch(action.type){
		case INIT_PLIST_DETAIL:
			const {banner,list,specialname} = action
			return {...state,detail:{banner,lists:list,specialname}}
		case INIT_PLIST_LIST:
			return {...state,lists:[...action.data]}
		default:
			return state
	}
}

export default plist
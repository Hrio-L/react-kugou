const INIT_TOPLIST_LIST = 'INIT_TOPLIST_LIST'
const INIT_RANK='INIT_RANK'

const initialState = {
	lists:[],
	rank:{
		banner:'',
		rankname:'',
		lists:[]
	}
}

const toplist = (state = initialState,action) => {
	switch(action.type){
		case INIT_TOPLIST_LIST:
			return {...state,lists:[...action.data]}
		case INIT_RANK:
			const {list,banner,rankname,time} = action
			return {...state,rank:{lists:list,banner,rankname,time}}
		default:
			return state
	}
}

export default toplist
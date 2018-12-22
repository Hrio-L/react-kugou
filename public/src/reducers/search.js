const INIT_HOT_SEARCH_LIST = 'INIT_HOT_SEARCH_LIST'
const ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM'
const REMOVE_HISTORY_ITEM = 'REMOVE_HISTORY_ITEM'
const REMOVE_HISTORY_LIST = 'REMOVE_HISTORY_LIST'
const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT'
const CHANGE_RESULT_LOADING = 'CHANGE_RESULT_LOADING'
const INIT_RESULT = 'INIT_RESULT'

const getHistoryLists = () => {
	const list = localStorage.getItem('historyLists') 
	const historyList = list ? JSON.parse(list) : []
	return historyList
}

const setAndGetHistoryList = newList => {
	const newHistoryLists = Array.from(new Set(newList));
	localStorage.setItem('historyLists',JSON.stringify(newHistoryLists))
	return newHistoryLists
}

const initialState = {
	hotLists:[],
	historyLists: getHistoryLists(),
	result:{
		loading:false,
		page:1,
		total:0,
		lists:[],
		complate:false
	}
}


const search = (state = initialState,action) => {
	switch(action.type){
		case ADD_HISTORY_ITEM:
			const addHistoryList = [...state.historyLists,action.keyword]
			return {...state,historyLists:setAndGetHistoryList(addHistoryList)}
		case REMOVE_HISTORY_ITEM:
			const filterHistoryList = state.historyLists.filter(d => d !== action.keyword)
			return {...state,historyLists:setAndGetHistoryList(filterHistoryList)}
		case REMOVE_HISTORY_LIST:
			localStorage.clear()
			return {...state,historyLists:[]}
		case INIT_HOT_SEARCH_LIST:
			return {...state,hotLists:action.data}
		case CHANGE_RESULT_LOADING:
			return {...state,result:{...state.result,loading:action.loading}}
		case UPDATE_SEARCH_RESULT:
			const {lists,...resultRest} = action.data
			return {...state,result:{...state.result,...resultRest,lists:[...state.result.lists,...lists],loading:false,complate:true}}
		case INIT_RESULT:
			return {...state,result:{...initialState.result}}
		default:
			return state
	}
}


export default search
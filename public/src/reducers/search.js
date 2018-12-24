const INIT_HOT_SEARCH_LIST = 'INIT_HOT_SEARCH_LIST'
const ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM'
const REMOVE_HISTORY_ITEM = 'REMOVE_HISTORY_ITEM'
const REMOVE_HISTORY_LIST = 'REMOVE_HISTORY_LIST'
const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT'
const CHANGE_RESULT_LOADING = 'CHANGE_RESULT_LOADING'
const INIT_RESULT = 'INIT_RESULT'

const getHistoryLists = () => {
	const list = localStorage.getItem('historySearchLists') 
	const historyList = list ? JSON.parse(list) : []
	return historyList
}

const setAndGetHistoryList = (historyList,item) => {
	let newHistoryLists = historyList	
	if(item){
		const filterHistoryList = historyList.filter(d => d !== item)
		newHistoryLists = [...filterHistoryList,item]
	}
	localStorage.setItem('historySearchLists',JSON.stringify(newHistoryLists))
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
			return {...state,historyLists:setAndGetHistoryList(state.historyLists,action.keyword)}
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
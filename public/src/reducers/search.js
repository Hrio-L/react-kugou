const SAVE_HOT_LIST = 'SAVE_HOT_LIST'
const SAVE_SEARCH_RESULT = 'SAVE_SEARCH_RESULT'
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
	hotList:[],
	historyList: getHistoryLists(),
	result:{
		loading:false,
		page:1,
		total:0,
		list:[],
		complate:false
	}
}


const search = (state = initialState,action) => {
	switch(action.type){
		case SAVE_HOT_LIST:
			return {
				...state,
				hotList:action.payload
			}
		case SAVE_SEARCH_RESULT:
			return {
				...state,
				result:{
					...state.result,
					list:action.payload.list,
					total:action.payload.total,
					complate:true
				}
			}
		case UPDATE_SEARCH_RESULT:
			const {list,...resultRest} = action.payload
			return {
				...state,
				result:{
					...state.result,
					...resultRest,
					list:[...state.result.list,...list],
					loading:false,
					complate:true
				}
			}
		case ADD_HISTORY_ITEM:
			return {
				...state,
				historyList:setAndGetHistoryList(state.historyList,action.payload)
			}
		case REMOVE_HISTORY_ITEM:
			const filterHistoryList = state.historyList.filter(d => d !== action.payload)
			return {
				...state,
				historyList:setAndGetHistoryList(filterHistoryList)
			}
		case REMOVE_HISTORY_LIST:
			localStorage.clear()
			return {
				...state,
				historyList:[]
			}
		case CHANGE_RESULT_LOADING:
			return {
				...state,
				result:{
					...state.result,
					loading:action.payload
				}
			}
		case INIT_RESULT:
			return {
				...state,
				result:initialState.result
			}
		default:
			return state
	}
}


export default search
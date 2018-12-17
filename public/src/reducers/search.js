const INIT_HOT_SEARCH_LIST = 'INIT_HOT_SEARCH_LIST'
const ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM'
const REMOVE_HISTORY_ITEM = 'REMOVE_HISTORY_ITEM'
const REMOVE_HISTORY_LIST = 'REMOVE_HISTORY_LIST'

const historyLists = localStorage.getItem('historyLists')

const initialState = {
	hotLists:[],
	historyLists: historyLists ? JSON.parse(historyLists) : []
}

const search = (state = initialState,action) => {
	let newHistoryLists = null
	switch(action.type){
		case ADD_HISTORY_ITEM:
			newHistoryLists  = [...state.historyLists,{id:action.id,keyword:action.keyword}]
			localStorage.setItem('historyLists',JSON.stringify(newHistoryLists))
			return {...state,historyLists:newHistoryLists}
		case REMOVE_HISTORY_ITEM:
			newHistoryLists = state.historyLists.filter((d,i) => d.id !== action.id)
			localStorage.setItem('historyLists',JSON.stringify(newHistoryLists))
			return{...state,historyLists:newHistoryLists}
		case REMOVE_HISTORY_LIST:
			localStorage.clear()
			return {...state,historyLists:[]}
		case INIT_HOT_SEARCH_LIST:
			return {...state,hotLists:action.data}
		default:
			return state
	}
}


export default search
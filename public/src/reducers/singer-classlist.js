const INIT_SINGER_CLASSLIST = 'INIT_SINGER_CLASSLIST'
const INIT_SINGER_LIST = 'INIT_SINGER_LIST'
const UPDATE_SINGER_LIST = 'UPDATE_SINGER_LIST'
const INIT_SINGER = 'INIT_SINGER'
const UPDATE_SINGER_SONGS = 'UPDATE_SINGER_SONGS'
const CHANGE_SINGER_LIST_LOADING = 'CHANGE_SINGER_LIST_LOADING'
const CHANGE_SINGER_LOADING = 'CHANGE_SINGER_LOADING'

const initialState = {
	classname:'',
	lists:[],
	singerLists:[],
	page:1,
	total:0,
	loading:false,
	singer:{
		loading:false,
		total:0,
		page:1,
		songs:[],
		banner:'',
		singerName:''
	}
}

const singerClasslist = (state = initialState,action) => {
	switch(action.type){
		case CHANGE_SINGER_LIST_LOADING:
			return {...state,loading:action.loading}
		case CHANGE_SINGER_LOADING:
			return {...state,singer:{...state.singer,loading:action.loading}}
		case INIT_SINGER_CLASSLIST:
			return {...state,lists:[...action.data]}
		case INIT_SINGER_LIST:
			return {...initialState,singer:state.singer,lists:state.lists}
		case UPDATE_SINGER_LIST:
			const {lists:singerLists,...singerListRest} = action
			return {...state,singerLists:[...state.singerLists,...singerLists],...singerListRest,loading:false}
		case INIT_SINGER:
			return {...state,singer:{...initialState.singer}}
		case UPDATE_SINGER_SONGS:
			const {lists:songs,...singerRest} = action
			return{...state,singer:{songs:[...state.singer.songs,...songs],...singerRest,loading:false}}
		default:
			return state
	}
}

export default singerClasslist
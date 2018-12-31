const SAVE_SINGER_CLASS = 'SAVE_SINGER_CLASS'
const SAVE_SINGER_LIST = 'SAVE_SINGER_LIST'
const UPDATE_SINGER_LIST = 'UPDATE_SINGER_LIST'
const INIT_SINGER_LIST = 'INIT_SINGER_LIST'
const SAVE_SONGS_LIST = 'SAVE_SONGS_LIST'
const UPDATE_SONGS_LIST = 'UPDATE_SONGS_LIST'
const CHANGE_SINGER_LIST_LOADING = 'CHANGE_SINGER_LIST_LOADING'
const CHANGE_SINGER_LOADING = 'CHANGE_SINGER_LOADING'
const INIT_SONGS_LIST = 'INIT_SONGS_LIST'

const initialState = {
	classname:'',
	classList:[],
	singerList:[],
	page:1,
	total:0,
	loading:false,
	singer:{
		loading:false,
		total:0,
		page:1,
		list:[],
		banner:'',
		singerName:''
	}
}

const singerClasslist = (state = initialState,action) => {
	switch(action.type){
		case SAVE_SINGER_CLASS:
			return {
				...state,
				classList:action.payload
			}
		case SAVE_SINGER_LIST:
			return {
				...state,
				singerList:action.payload.list,
				classname:action.payload.classname,
				total:action.payload.total
			}
		case UPDATE_SINGER_LIST:
			const {list:singerList,...singerListRest} = action.payload
			return {
				...state,
				singerList:[...state.singerList,...singerList],
				...singerListRest,
				loading:false
			}
		case INIT_SINGER_LIST:
			return {
				...state,
				singerList:initialState.singerList,
				classname:initialState.classname,
				loading:false,
			}
		case SAVE_SONGS_LIST:
			return {
				...state,
				singer:{
					...state.singer,
					total:action.payload.total,
					list:action.payload.list,
					banner:action.payload.banner,
					singerName:action.payload.singerName,
					intro:action.payload.intro
				}
			}
		case UPDATE_SONGS_LIST:
			const {list,...singerRest} = action.payload
			return{
				...state,
				singer:{
					list:[...state.singer.list,...list],
					...singerRest,
					loading:false
				}
			}
		case INIT_SONGS_LIST:
			return {
				...state,
				singer:initialState.singer
			}
		case CHANGE_SINGER_LIST_LOADING:
			return {
				...state,
				loading:action.payload
			}
		case CHANGE_SINGER_LOADING:
			return {
				...state,
				singer:{
					...state.singer,
					loading:action.payload
				}
			}
		default:
			return state
	}
}

export default singerClasslist
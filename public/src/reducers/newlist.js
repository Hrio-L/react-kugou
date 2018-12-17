const INIT_NEWLIST_SONGS = 'INIT_NEWLIST_SONGS'
const INIT_BANNER = 'INIT_BANNER'

const initialState = {
	banners:[],
	songs:[]
}

const newlist = (state = initialState,action) => {
	switch(action.type){
		case INIT_BANNER:
			return {...state,banners:action.banners}
		case INIT_NEWLIST_SONGS:
			return {...state,songs: [...action.songs]}
		default:
			return state
	}
}

export default newlist
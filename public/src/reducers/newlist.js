const INIT_NEWLIST_SONGS = 'INIT_NEWLIST_SONGS'

const initialState = {
	songs:[]
}

const newlist = (state = initialState,action) => {
	switch(action.type){
		case INIT_NEWLIST_SONGS:
			return {...state,songs: [...action.data]}
		default:
			return state
	}
}

export default newlist
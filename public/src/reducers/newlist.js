const SAVE_NEWLIST = 'SAVE_NEWLIST'
const SAVE_BANNER = 'SAVE_BANNER'

const initialState = {
	banners:[],
	songs:[]
}

const newlist = (state = initialState,action) => {
	switch(action.type){
		case SAVE_BANNER:
			return {
				...state,
				banners:action.payload
			}
		case SAVE_NEWLIST:
			return {
				...state,
				songs:action.payload
			}
		default:
			return state
	}
}

export default newlist
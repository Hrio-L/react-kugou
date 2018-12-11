const INIT_SINGER_CLASSLIST = 'INIT_SINGER_CLASSLIST'

const initialState = {
	lists:[]
}

const singerClasslist = (state = initialState,action) => {
	switch(action.type){
		case INIT_SINGER_CLASSLIST:
			return {...state,lists:[...action.data]}
		default:
			return state
	}
}

export default singerClasslist
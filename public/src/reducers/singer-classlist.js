const INIT_SINGER_CLASSLIST = 'INIT_SINGER_CLASSLIST'
const INIT_SINGER_LIST = 'INIT_SINGER_LIST'
const INIT_SINGER = 'INIT_SINGER'

const initialState = {
	classname:'',
	lists:[],
	singerLists:[],
	singer:{
		lists:[],
		banner:'',
		singerName:''
	}
}

const singerClasslist = (state = initialState,action) => {
	switch(action.type){
		case INIT_SINGER_CLASSLIST:
			return {...state,lists:[...action.data]}
		case INIT_SINGER_LIST:
			return{...state,singerLists:action.list,classname:action.classname}
		case INIT_SINGER:
			const {banner,singerName,list,intro} = action
			return{...state,singer:{banner,singerName,lists:list,intro}}
		default:
			return state
	}
}

export default singerClasslist
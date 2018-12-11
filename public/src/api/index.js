const axios = require('axios')

const handle = xhr => {
	const {data,errcode,msg} = xhr.data
	if(errcode === 0){
		return data
	}else{
		console.error(msg)
		return null
	}
}

class Api{
	static async getNewlist(){
		try{
			const xhr = await axios.get('/newlist')
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getToplist(){
		try{
			const xhr = await axios.get('/toplist')
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getPlist(){
		try{
			const xhr = await axios.get('/plist')
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getSingerClasslist(){
		try{
			const xhr = await axios.get('/singer-classlist')
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
}

export default Api
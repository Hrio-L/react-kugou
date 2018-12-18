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
	static async getRankList(id){
		try{
			const xhr = await axios.get(`/rank?rankid=${id}`)
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
	static async getPlistDetail(id){
		try{
			const xhr = await axios.get(`/plist-detail?plistid=${id}`)
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
	static async getSingerList(id){
		try{
			const xhr = await axios.get(`/singer-list?classid=${id}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getSingerSongsList(id){
		try{
			const xhr = await axios.get(`/singer-songs?singerid=${id}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getHotSearch(){
		try{
			const xhr = await axios.get('/hot-search')
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async search(keyword){
		try{
			const xhr = await axios.get(`/search?keyword=${keyword}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
}

export default Api
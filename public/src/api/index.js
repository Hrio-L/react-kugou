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
	static async getRankList(id,page){
		try{
			const xhr = await axios.get(`/rank?rankid=${id}&page=${page}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getPlist(page){
		try{
			const xhr = await axios.get(`/plist?page=${page}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getPlistDetail(id,page){
		try{
			const xhr = await axios.get(`/plist-detail?plistid=${id}&page=${page}`)
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
	static async getSingerList(id,page){
		try{
			const xhr = await axios.get(`/singer-list?classid=${id}&page=${page}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getSingerSongsList(id,page){
		try{
			const xhr = await axios.get(`/singer-songs?singerid=${id}&page=${page}`)
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
	static async search(keyword,page){
		try{
			const xhr = await axios.get(`/search?keyword=${keyword}&page=${page}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getSongDetail(hash){
		try{
			const xhr = await axios.get(`/song?hash=${hash}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
}

export default Api
import axios from 'axios'
import  qs from 'querystring'
import Toast from '../components/toast'

const handle = xhr => {
	const {data,errcode,msg} = xhr.data
	if(errcode === 0){
		return data
	}else{
		console.error(msg)
		Toast.show({
			message:'网络异常',
			style:{color:'white'},
			duration:1
		})
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
	static async getRankList(params){
		try{
			const xhr = await axios.get(`/rank?${qs.stringify(params)}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getPlist(params){
		try{
			const xhr = await axios.get(`/plist?${qs.stringify(params)}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getPlistDetail(params){
		try{
			const xhr = await axios.get(`/plist-detail?${qs.stringify(params)}`)
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
	static async getSingerList(params){
		try{
			const xhr = await axios.get(`/singer-list?${qs.stringify(params)}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getSingerSongsList(params){
		try{
			const xhr = await axios.get(`/singer-songs?${qs.stringify(params)}`)
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
	static async search(params){
		try{
			const xhr = await axios.get(`/search?${qs.stringify(params)}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async getSongDetail(params){
		try{
			const xhr = await axios.get(`/song?${qs.stringify(params)}`)
			return handle(xhr)
		}catch(err){
			console.error(err.message)
		}
	}
	static async downloadMusic(params){
		try{
			const elementA = document.createElement('a')
			elementA.download = `${params.filename}.mp3`
			elementA.href = `/download?${qs.stringify(params)}`
			elementA.click()
		}catch(err){
			console.error(err.message)
		}
	}
}

export default Api
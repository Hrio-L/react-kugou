const http = require('http')
const https = require('https')
const path = require('path')
const request = require('../util/request')

const handleError = (ctx,error) => {
	console.log(error)
	ctx.body = {
		errcode:1,
		msg:error
	}
}

const handleSuccess = (ctx,body) => {
	ctx.type = 'json'
	ctx.body = {
		errcode:0,
		msg:'ok',
		data:body
	}
}


const baseRequsetOption = {
	headers:{
		'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
	}
}


class Index {
	static  async getNewlist (ctx){
		try{
			const res = await request.get('http://m.kugou.com/?json=true',baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getToplist(ctx){
		try{
			const res = await request.get('http://m.kugou.com/rank/list&json=true',baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getRankList(ctx){
		try{
			const {rankid,page} = ctx.query
			const res = await request.get(`http://m.kugou.com/rank/info/?rankid=${rankid}&json=true&page=${page}`,baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getPlist(ctx){
		try{
			const {page} = ctx.query
			const res = await request.get(`http://m.kugou.com/plist/index?json=true&page=${page}`,baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getPlistDetail(ctx){
		try{
			const {plistid,page} = ctx.query
			const res = await request.get(`http://m.kugou.com/plist/list/${plistid}?json=true&page=${page}`,baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getSingerClasslist(ctx){
		try{
			const res = await request.get('http://m.kugou.com/singer/class&json=true',baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getSingerList(ctx){
		try{
			const {classid,page} = ctx.query
			const res = await request.get(`http://m.kugou.com/singer/list/${classid}?json=true&page=${page}`,baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getSingerSongsList(ctx){
		try{
			const {singerid,page} = ctx.query
			const res = await request.get(`http://m.kugou.com/singer/info/${singerid}?json=true&page=${page}`,baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getHotSearch(ctx){
		try{
			const res = await request.get('http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30',baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async search(ctx){
		try{
			const {keyword,page} = ctx.query
			const res = await request.get(`http://mobilecdn.kugou.com/api/v3/search/song?format=json&page=${page}&keyword=${encodeURIComponent(keyword)}`,baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getSongDetail(ctx){
		try{
			const {hash} = ctx.query
			const res = await request.get(`http://www.kugou.com/yy/index.php?r=play/getdata&hash=${hash}`,baseRequsetOption)
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async downloadFile(ctx){
		try{
			const {filepath,filename} = ctx.query
			if(filepath){
				const ext = path.extname(filepath)
				ctx.response.attachment(`${filename || path.parse(filepath).base}${ext}`)
				const result = await request.get(filepath)
				ctx.body = result
			}
		}catch(err){
			handleError(ctx,err.message)
		}
	}
}


module.exports = Index
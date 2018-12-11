const http = require('http')
const https = require('https')
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




class Index {
	static async index (ctx){
		ctx.type = 'html'
		ctx.body = '<h1>KUGOU API</h1>'
	} 
	static  async getNewlist (ctx){
		try{
			const res = await request.get('http://m.kugou.com/?json=true')
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getToplist(ctx){
		try{
			const res = await request.get('http://m.kugou.com/rank/list&json=true')
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getPlist(ctx){
		try{
			const res = await request.get('http://m.kugou.com/plist/index&json=true')
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
	static async getSingerClasslist(ctx){
		try{
			const res = await request.get('http://m.kugou.com/singer/class&json=true')
			handleSuccess(ctx,JSON.parse(res))
		}catch(err){
			handleError(ctx,err.message)
		}
	}
}


module.exports = Index
const http = require('http')
const https = require('https')
const querystring = require('querystring')
const methods = ['get','post','put','delete']
const request = {}
const protocol = {
	http,
	https
}

methods.forEach((d,i) => {
	request[d] =  (url,options) => new Promise((resolve,reject) => {
		const urlProtocol = url.slice(0,4).split(':')[0]
		let reqOpt = {}

		if(options){
			const {data,...rest} = options
			reqOpt = {
				method:d,
				...rest
			}
		}

		const req = protocol[urlProtocol].request(url,reqOpt,res => {
			let size = 0
			let buffer = []
			res.on('data',chunk => {
				size += chunk.length
				buffer.push(chunk)
			})
			res.on('end',() => {
				const result = Buffer.concat(buffer,size)
				resolve(result.toString('utf8'))
			})
		})
		req.on('error',reject)
		if(options && options.data){
			req.write(querystring.stringify(options.data))
		}
		req.end()
	})
})


module.exports = request
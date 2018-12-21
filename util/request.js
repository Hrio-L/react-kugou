const http = require('http')
const https = require('https')
const urlUtil = require('url')
const querystring = require('querystring')
const methods = ['get','post','put','delete']
const request = {}
const protocol = {
	http,
	https
}

methods.forEach((d,i) => {
	request[d] =  (url,options) => new Promise((resolve,reject) => {
		const urlObj = urlUtil.parse(url)
		const {protocol:prot,host,hostname,path} = urlObj
		const urlProtocol = prot.split(':')[0]

		let reqOpt = {
			host,
			path
		}
		if(options){
			const {data,...rest} = options
			reqOpt = {
				...reqOpt,
				method:d.toUpperCase(),
				...rest
			}
		}

		const req = protocol[urlProtocol].request(reqOpt,res => {
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
		req.on('error',err => {
			reject(err)
		})
		if(options && options.data){
			req.write(querystring.stringify(options.data))
		}
		req.end()
	})
})

module.exports = request
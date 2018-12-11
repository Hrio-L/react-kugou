const Router = require('koa-router')
const controller = require('../controller')
const axios = require('axios')
const router = new Router()

router
	.get('/',controller.index)
	.get('/newlist',controller.getNewlist)
	.get('/toplist',controller.getToplist)
	.get('/plist',controller.getPlist)
	.get('/singer-classlist',controller.getSingerClasslist)


module.exports = router
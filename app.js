const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const routers = require('./routers')

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(routers.routes(),routers.allowedMethods())

const port = 8001

app.listen(8001,() => {
	console.log(`server running at http://localhost:${port}`)
})
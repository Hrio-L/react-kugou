const Koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const koaStatic = require('koa-static')
const routers = require('./routers')

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(routers.routes(),routers.allowedMethods())
app.use(koaStatic(path.join(__dirname,'public','build')))
app.use(async ctx => {
	ctx.status = 404
	ctx.body = '404'
})

const port = 8001

app.listen(8001,() => {
	console.log(`server running at http://localhost:${port}`)
})
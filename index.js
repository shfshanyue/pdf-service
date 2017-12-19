const Koa = require('koa')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const api = require('./src/api')

const app = new Koa()

app.use(logger())
app.use(koaBody())
app.use(cors())
app.use(api.middleware())

app.listen(8000)

module.exports = app

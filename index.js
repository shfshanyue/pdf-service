const Koa = require('koa')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const api = require('./src/api')
const config = require('./config')

const app = new Koa()

app.use(logger())
app.use(koaBody())
app.use(cors())
app.use(api.middleware())

if (!module.parent) {
  app.listen(config.port)
  console.log(`listing port ${config.port}`)
}

module.exports = app

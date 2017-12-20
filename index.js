const Koa = require('koa')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const logger = require('koa-logger')
var AV = require('leanengine')
const api = require('./src/api')
const config = require('./config')

const app = new Koa()

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
})

app.use(logger())
app.use(koaBody())
app.use(cors())
app.use(api.middleware())
app.use(AV.koa())

if (!module.parent) {
  app.listen(config.port)
  console.log(`listing port ${config.port}`)
}

module.exports = app

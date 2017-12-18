const router= require('koa-joi-router')
const api = router()
const Joi = router.Joi

api.prefix('/api')
api.route({
  path: '/',
  method: 'GET',
  validate: {
    query: {
    }
  },
  async handler (ctx) {
    ctx.body = ctx.request.query
  }
})

module.exports = api

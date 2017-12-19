const router = require('koa-joi-router')
const render = require('./pdf-util').render
const api = router()
const Joi = router.Joi

api.prefix('/api')
api.route({
  path: '/pdf',
  method: 'GET',
  validate: {
    query: {
      url: Joi.string().uri({ scheme: ['http', 'https'] }).required(),
      cookies: Joi.array().items(Joi.object({
        name: Joi.string().required(),
        value: Joi.string().required(),
        domain: Joi.string(),
        expires: Joi.number(),
        httpOnly: Joi.boolean()
      }))
    }
  },
  async handler (ctx) {
    ctx.set('Content-Type', 'application/pdf')
    ctx.body = await render(ctx.query)
  }
})

module.exports = api

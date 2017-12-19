const request = require('supertest')
const app = require('..').callback()

describe('GET /api/pdf', () => {
  it('response is ok', () => {
    request(app)
      .get('/api/render')
      .query({
        url: 'http://www.zhihu.com'
      })
      .expect(200)
      .expect('Content-Type', 'application/pdf')
  })
})

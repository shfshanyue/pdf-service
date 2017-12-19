const puppeteer = require('puppeteer')
const _ = require('lodash')
const config = require('../config')

async function render (options) {
  const { url, cookies, pdf: pdfOptions } = options
  const browser = await puppeteer.launch({
    executablePath: config.browserPath
    // devtools: true
  })
  const page = await browser.newPage()
  if (!_.isEmpty(cookies)) {
    await page.setCookie(...cookies.map(cookie => ({
      url,
      ...cookie
    })))
  }
  await page.goto(url, {
    waitUntil: 'networkidle0'
  })
  const pdfFile = await page.pdf(pdfOptions)
  await browser.close()
  return pdfFile
}

module.exports = {
  render
}

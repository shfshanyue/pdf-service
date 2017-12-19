const puppeteer = require('puppeteer')
const _ = require('lodash')

async function render (options) {
  const { url, cookies, pdf: pdfOptions } = options
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary'
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

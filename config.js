const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  port: Number(process.env.PORT) || 8000,
  browserPath: process.env.CHROME_PATH
}

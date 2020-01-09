const helmet = require('helemt')
const morgan = require('morgan')
const cors = require('cors')

module.exports = server => {
  server.use(morgan())
  server.use(helmet())
  server.use(cors())
}
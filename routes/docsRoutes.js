const { Router } = require('express')
const swaggerUi = require('swagger-ui-express')
const fs = require('fs')

const swaggerDocument = JSON.parse(fs.readFileSync(process.env.DOC_PATH, 'utf-8'))

const routes = new Router()
routes
  .use('/docs', swaggerUi.serve)
  .get('/docs', swaggerUi.setup(swaggerDocument))

module.exports = routes
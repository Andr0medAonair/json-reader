require('dotenv').config()
console.log(process.env)
const express = require('express');
const Routes = require('./routes/docsRoutes')

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})

app.use('/api/v1', Routes)

module.exports = app;
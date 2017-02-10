import express from 'express'
import mongoose from 'mongoose'
import Promise from 'bluebird'
mongoose.Promise = Promise
import db from './config/db'

import expressConfig from './config/express'
import routers from './routers'


import './utils/code'

const PORT = process.env.PORT || 4000
const app = express()


expressConfig(app)

routers(app)

connect()
  .on('error', console.log)
  .once('open', listen)
  .on('disconnected', connect)

function connect() {
  return mongoose.connect(db.url).connection
}


function listen() {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })
}




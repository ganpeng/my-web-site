import compression from 'compression'
import morgan from 'morgan'
import bodyParser from 'body-parser'



export default (app) => {

  app.use(compression())
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

}



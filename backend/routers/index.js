
import userRouter from './user'
import authRouter from './auth'




export default (app) => {
  app.use('/api/user', userRouter)
  app.use('/api/auth', authRouter)
}


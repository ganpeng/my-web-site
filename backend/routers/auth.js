import express from 'express'

import authController from '../controllers/auth'


const router = express.Router()

router.post('/code', authController.getSmsCode)
router.post('/', authController.authUser)

// router.put('/', )
// router.delete('/', )




export default router

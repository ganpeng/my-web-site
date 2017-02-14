import co from 'co'
import jwt from 'jsonwebtoken'
import * as _ from 'lodash'

import { createCode, smsSendCode } from '../utils/code'
import SmsCode from '../models/smscode'
import User from '../models/user'

import { compare } from '../utils/bcrypt'



export const getSmsCode = (req, res) => {
  co(function*() {

    const { phone } = req.body
    const code = createCode()

    if(yield User.findOne({phone}).exec()) {
      return res.json({
        success: false,
        message: '该手机号已经注册'
      })
    } else {

      if (yield SmsCode.findOne({phone}).exec()) {
        yield SmsCode.findOneAndUpdate({phone}, {code}).exec()
      } else {
        yield SmsCode.create({ phone, code })
      }


      smsSendCode(code, phone)

      return res.json({
        success: true,
        message: '验证码发送成功'
      })

    }

  }).catch((err) => {
    console.log(err)
  })
}


export const authUser = (req, res) => {
  co(function* () {
    const { identify, password } = req.body

    const user = yield User.findOne({
      $or: [
        {phone: identify},
        {username: identify}
      ]
    }).exec()



    if (!user) {
      return res.json({
        success: false,
        message: '该用户不存在'
      })
    }


    if(!(yield compare(password, user.hashedPassword))) {
      return res.json({
        success: false,
        message: '您输入的密码不正确'
      })
    }

    const token = jwt.sign({
      data: _.pick(user, ['phone', '_id', 'createdAt', 'updatedAt'])
    }, 'mysecretstring')


    return res.json({
      success: true,
      message: '认证成功',
      token
    })


  }).catch((err) => {
      console.log(err)
    })
}


export default {
  getSmsCode,
  authUser
}

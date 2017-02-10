import co from 'co'

import { createCode, smsSendCode } from '../utils/code'
import SmsCode from '../models/smscode'
import User from '../models/user'

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



export default {
  getSmsCode
}

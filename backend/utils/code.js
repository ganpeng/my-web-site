import speakeasy from 'speakeasy'
import uuid from 'uuid'
import Dayu from 'alidayu-node'




const appKey = '23598047'
const appSecret = '5e467c7f3de8ff0c19f57ba33a92fb85'
const smsSendApp = new Dayu(appKey, appSecret)
const signName = '短信注册验证签名'
const templateID = 'SMS_39570016'
const params = (code) => {
  return {
    "code": code,
    "product": "测试网站"
  }
}




export function createCode() {
  const secret = uuid.v4()
  return speakeasy.hotp({secret, counter: 42})
}


export function smsSendCode(code, phone) {
  smsSendApp.smsSend({
    sms_free_sign_name: signName,
    sms_param: params(code),
    rec_num: phone,
    sms_template_code: templateID
  })
}




export default {
  createCode,
  smsSendCode
}


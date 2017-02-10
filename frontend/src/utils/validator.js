import { isEmail, isEmpty, isAlphanumeric, equals, isMobilePhone, isLength, isNumeric } from 'validator'
import { isUndefined } from 'lodash'


const phoneReg = /^1[3|4|5|7|8]\d{9}$/

export const loginFormValidator = values => {
  let errors = {}
  if (isUndefined(values.identify) || isEmpty(values.identify)) {
    errors.identify = '该字段不能为空'
  } else if (!phoneReg.test(values.identify) && !(isAlphanumeric(values.identify) && isLength(values.identify, {min: 6, max: 17})) && !isEmail(values.identify)) {
    errors.identify = '请输入正确的手机号/用户名/邮箱'
  }

  if (isUndefined(values.password) || isEmpty(values.password)) {
    errors.password = '该字段不能为空'
  } else if (!(isAlphanumeric(values.password) && isLength(values.password, {min: 6, max: 17}))) {
    errors.password = '您输入的密码格式不正确'
  }

  return errors
}


export const signUpFormValidator = values => {
  let errors = {}

  if (isUndefined(values.mobile) || isEmpty(values.mobile)) {
    errors.mobile = '手机号不能为空'
  } else if (!phoneReg.test(values.mobile)) {
    errors.mobile = '请输入正确的手机号'
  }

  if (isUndefined(values.code) || isEmpty(values.code)) {
    errors.code = '验证码不能为空'
  } else if(!isNumeric(values.code) || values.code.length !== 6) {
    errors.code = '验证码只能是6位的数字'
  }

  if (isUndefined(values.password) || isEmpty(values.password)) {
    errors.password = '该字段不能为空'
  } else if (!(isAlphanumeric(values.password) && isLength(values.password, {min: 6, max: 17}))) {
    errors.password = '您输入的密码格式不正确'
  }


  return errors
}






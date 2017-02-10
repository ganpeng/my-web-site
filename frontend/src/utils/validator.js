import { isEmail, isEmpty, isAlphanumeric, equals, isMobilePhone, isLength, matches } from 'validator'
import { isUndefined } from 'lodash'


// const passwordReg = /^[a-zA-Z][a-zA-Z0-9_]{5, 17}$/
const passwordReg = /^[a-zA-Z0-9]{5, 17}$/
const usernameReg = /^[a-zA-Z0-9]{6, 17}$/
const emailReg = /^[a-zA-Z0-9._%-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/
const dateReg = /^\d{4}-\d{1,2}-\d{1,2}$/
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









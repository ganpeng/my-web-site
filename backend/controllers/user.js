import co from 'co'
import jwt from 'jsonwebtoken'
import * as _ from 'lodash'

import User from '../models/user'
import SmsCode from '../models/smscode'
import { genSalt, hash, compare } from '../utils/bcrypt'

export const addUser = (req, res) => {
  co(function*() {
    const { phone, password, code } = req.body

    const codeInfo = yield SmsCode.findOne({phone}).exec()


    if (!codeInfo) {
      return res.json({
        success: false,
        message: '请先获取验证码'
      })
    }

    const salt = yield genSalt(10)
    const hashedPassword = yield hash(password, salt)


    if (codeInfo.code === code) {


      const user = yield User.create({
        phone,
        hashedPassword
      })



      const token = jwt.sign({
        data: _.pick(user, ['phone', '_id', 'createdAt', 'updatedAt'])
      }, 'mysecretstring')


      return res.json({
        success: true,
        message: '创建用户成功',
        token
      })

    } else {
      return res.json({
        success: false,
        message: '验证码输入错误'
      })

    }

  }).catch((err) => {
    console.log(err)
  })
}


export const getUser = (req, res) => {
  co(function*() {
    const id = req.params.id

    const user = yield User.findById(id).exec()

    return res.json({
      success: true,
      message: '获取用户成功',
      user
    })

  }).catch((err) => {
    console.log(err)
  })
}


export const updateUser = (req, res) => {
  co(function*() {
    const id = req.params.id
    const { username, email } = req.body


    // 用户名必须是唯一的
    if (username) {
      let _users = (yield User.find({username}).exec()).filter((user) => user._id != id)
      if (_users.length !== 0) {
        return res.json({
          success: false,
          message: '该用户名已经存在'
        })
      }

    }

    // 邮箱也必须是唯一的
    if (email) {
      let _users = (yield User.find({email}).exec()).filter((user) => user._id != id)
      if (_users.length !== 0) {
        return res.json({
          success: false,
          message: '该邮箱已经存在'
        })
      }

    }

    const user = yield User.findByIdAndUpdate(id, req.body).exec()

    return res.json({
      success: true,
      message: '更新用户成功',
      user: Object.assign(user, req.body)
    })

  }).catch((err) => {
    console.log(err)
  })
}


export const deleteUser = (req, res) => {
  co(function*() {
    const id = req.params.id

    yield User.findByIdAndRemove(id).exec()

    return res.json({
      success: true,
      message: '用户删除成功'
    })

  }).catch((err) => {
    console.log(err)
  })
}




export default {
  addUser,
  getUser,
  updateUser,
  deleteUser
}



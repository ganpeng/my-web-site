import mongoose from 'mongoose'

const Schema = mongoose.Schema


const SmsCodeSchema = new Schema({
  phone: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },

  code: {
    type: String,
    trim: true,
    required: true
  }

  // valid: {
  //   type: Date,
  //   default: Date.now,
  //   expires: '1m'   // 1分钟后这条记录会被自动删除
  // }

})



export default mongoose.model('SmsCode', SmsCodeSchema)



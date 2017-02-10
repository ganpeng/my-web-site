import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true
    // unique: true
  },

  phone: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },

  email: {
    type: String,
    trim: true
    // unique: true
  },

  hashedPassword: {
    type: String,
    trim: true,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
})


export default mongoose.model('User', UserSchema)

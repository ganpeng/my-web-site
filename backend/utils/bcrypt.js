import bcrypt from 'bcryptjs'
import Promise from 'bluebird'

export const genSalt = Promise.promisify(bcrypt.genSalt)
export const hash = Promise.promisify(bcrypt.hash)
export const compare = Promise.promisify(bcrypt.compare)

export default {
  genSalt,
  hash,
  compare
}



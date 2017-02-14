import jwtDecode from 'jwt-decode'


import { GET_CODE } from '../constants/api'
import { SET_CURRENT_USER } from '../constants/'
import { setError, deleteError } from './error'


export function getCode(phone, cb) {
  return dispatch => {
    fetch(GET_CODE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({phone})
    }).then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log('success')
          cb && cb()
        } else {
          dispatch(setError(result.message))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}


export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}


export function login(user) {
  return dispatch => {
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((res) => res.json())
      .then((result) => {
        if (result.success) {
          localStorage.setItem('token', result.token)
          dispatch(setCurrentUser(jwtDecode(result.token).data))
        } else {
          dispatch(setError(result.message))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}




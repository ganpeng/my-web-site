import jwtDecode from 'jwt-decode'

import { setError } from './error'
import { setCurrentUser } from './auth'

export function addUser(obj) {
  return dispatch => {
    return fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then((res) => res.json())
      .then((result) => {
        if(result.success) {
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






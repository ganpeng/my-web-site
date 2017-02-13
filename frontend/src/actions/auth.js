import { SubmissionError } from 'redux-form'

import { GET_CODE } from '../constants/api'



export function getCode(phone) {
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
          console.log(result)
        } else {
          throw new SubmissionError( {errors: { mobile: 'error' }} )
          return false
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}






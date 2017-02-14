
import { SET_ERROR, DELETE_ERROR } from '../constants/'

export function setError(error) {
  return {
    type: SET_ERROR,
    error
  }
}



export function deleteError() {
   return {
      type: DELETE_ERROR
    }
}



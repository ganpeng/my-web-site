import { SET_ERROR, DELETE_ERROR } from '../constants/'


export default function globalError(state='', action) {
  switch(action.type) {
    case SET_ERROR:
      return action.error
    case DELETE_ERROR:
      return ''
    default:
      return state
  }
}



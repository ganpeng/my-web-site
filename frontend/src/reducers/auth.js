import { isEmpty } from 'lodash'

import { SET_CURRENT_USER } from '../constants/'


const initialState = {
  authenticated: false,
  user: {}
}


export default function auth(state = initialState, action = {}) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        authenticated: !isEmpty(action.user),
        user: action.user
      }
    default:
      return state
  }
}

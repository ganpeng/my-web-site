import { combineReducers } from 'redux'
import { reducer as formReducer  } from 'redux-form'

import globalError from './error'
import auth from './auth'


const rootReducer = combineReducers({
  test: (state = 0, actions) => state,
  form: formReducer,
  globalError,
  auth
})

export default rootReducer






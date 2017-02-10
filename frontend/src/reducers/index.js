import { combineReducers } from 'redux'
import { reducer as formReducer  } from 'redux-form'


const rootReducer = combineReducers({
  test: (state = 0, actions) => state,
  form: formReducer
})


console.log('rootReducer')

export default rootReducer






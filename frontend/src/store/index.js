import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers/'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger())
  )
)

console.log('store')


export default store

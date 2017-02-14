import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode'

import { setCurrentUser } from './actions/auth'

import 'antd/dist/antd.css'

import App from './containers/App/';


import store from './store'

const token = localStorage.getItem('token')

if(token) {
  store.dispatch(setCurrentUser(jwtDecode(token)))
}


render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)





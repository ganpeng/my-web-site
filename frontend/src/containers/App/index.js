import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router-dom'

import './style.css'

import LoginPage from '../LoginPage/'
import SignUpPage from '../SignUpPage/'
import HomePage from '../HomePage/'
import TestPage from '../TestPage/'
import ProfilePage from '../ProfilePage/'
import ForgetPasswordPage from '../ForgetPasswordPage/'
import RequireAuth from '../../utils/requireAuth'


class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app-container">
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/forgetpassword" component={ForgetPasswordPage} />
        <Route path="/profile" component={RequireAuth(ProfilePage)} />
      </div>
    );
  }
}

export default App

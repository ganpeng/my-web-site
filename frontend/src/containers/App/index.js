import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router-dom'

import './style.css'

import LoginPage from '../LoginPage/'
import SignUpPage from '../SignUpPage/'
import HomePage from '../HomePage/'
import TestPage from '../TestPage/'
import ForgetPasswordPage from '../ForgetPasswordPage/'


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
        <HomePage />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/forgetpassword" component={ForgetPasswordPage} />
      </div>
    );
  }
}

export default App

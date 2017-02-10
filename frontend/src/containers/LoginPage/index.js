import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'antd'

import LoginForm from '../../components/LoginForm/'
import './style.css'

class LoginPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(values)
        resolve()
      }, 4000)
    })
  }


  render() {
    return (
      <div className="login-form-container">
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default LoginPage;

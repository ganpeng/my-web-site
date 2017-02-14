import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
    const { auth: { authenticated } } = this.props
    return (
      <div className="login-form-container form-container">
        {
          authenticated ? <Redirect to="/profile" /> : <LoginForm onSubmit={this.handleSubmit} />
        }
      </div>
    );
  }
}


function mapStatesToProps(state) {
  return {
    auth: state.auth
  }
}



export default connect(mapStatesToProps, {})(LoginPage);

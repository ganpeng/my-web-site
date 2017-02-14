import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoginForm from '../../components/LoginForm/'
import { login } from '../../actions/auth'
import { setError, deleteError } from '../../actions/error'
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
    this.props.login(values)
  }


  render() {
    const { auth: { authenticated }, globalError, setError, deleteError } = this.props
    return (
      <div className="login-form-container form-container">
        {
          authenticated ? <Redirect to="/profile" /> : <LoginForm onSubmit={this.handleSubmit} globalError={globalError} setError={setError} deleteError={deleteError} />
        }
      </div>
    );
  }
}


function mapStatesToProps(state) {
  return {
    globalError: state.globalError,
    auth: state.auth
  }
}



export default connect(mapStatesToProps, { login, setError, deleteError })(LoginPage);

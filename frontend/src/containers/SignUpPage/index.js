import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import SignUpForm from '../../components/SignUpForm/'
import { getCode } from '../../actions/auth'
import { addUser } from '../../actions/user'
import { setError, deleteError } from '../../actions/error'

class SignUpPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(values) {
    this.props.addUser({phone: values.mobile, code: values.code, password: values.password})
  }

  render() {
    const { globalError, getCode, setError, deleteError, auth: { authenticated }  } = this.props
    return (
      <div className="signup-form-container form-container">
        {
          authenticated ? (<Redirect to="/profile" />): <SignUpForm onSubmit={this.handleSubmit} getCode={getCode} globalError={globalError} setError={setError} deleteError={deleteError}/>
        }
      </div>
    )
  }
}


function mapStatesToProps(state) {
  return {
    globalError: state.globalError,
    auth: state.auth
  }
}



export default connect(mapStatesToProps, { getCode, addUser, setError, deleteError })(SignUpPage)

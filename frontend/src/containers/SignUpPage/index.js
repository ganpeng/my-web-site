import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import SignUpForm from '../../components/SignUpForm/'
import { getCode } from '../../actions/auth'
import { addUser } from '../../actions/user'

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
    // new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log(values)
    //   }, 3000)
    // })
    this.props.addUser({phone: values.mobile, code: values.code, password: values.password})
  }

  render() {
    return (
      <div className="signup-form-container form-container">
        <SignUpForm onSubmit={this.handleSubmit} getCode={this.props.getCode}/>
      </div>
    )
  }
}




export default connect(null, { getCode, addUser })(SignUpPage)

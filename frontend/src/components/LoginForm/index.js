import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Input, Button, Icon, Alert } from 'antd'

import { loginFormValidator as validate } from '../../utils/validator'

import './style.css'

const renderField = ({input, type, size, label, prefix, meta: {touched, error}}) => {
  return (
    <div>
      <Input
        {...input}
        type={type}
        size={size}
        placeholder={label}
        prefix={prefix}
        style={{marginBottom: '10px'}}
      />
      {touched && (error && <Alert type="error" message={error} showIcon={true} />)}
    </div>
  )
}


class LoginForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div className="login-form, form">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
          <Field
            name="identify"
            component={renderField}
            type="text"
            size="large"
            label="用户名/手机号"
            prefix={<Icon type="user"/>}
          />
          <Field
            name="password"
            component={renderField}
            type="password"
            label="密码"
            size="large"
            prefix={<Icon type="lock"/>}
          />
          <div style={{overflow:'hidden'}}>
            <Link style={{float:'left', lineHeight: '30px'}} to="/forgetpassword">忘记密码?</Link>
            <p style={{float:'right', lineHeight: '30px'}}>
              还没有帐号? 请
              <Link to="/signup">注册</Link>
            </p>
          </div>
          <div style={{marginTop: '10px'}}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={submitting}
              size="large"
            >
              登录
            </Button>
          </div>
        </form>
      </div>
    );
  }
}


LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm)



export default LoginForm;

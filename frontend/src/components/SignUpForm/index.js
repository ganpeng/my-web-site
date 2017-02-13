import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Input, Button, Icon, Alert } from 'antd'
import { isUndefined } from 'lodash'

const InputGroup = Input.Group

import { signUpFormValidator as validate, phoneReg } from '../../utils/validator'
import CountDown from '../CountDown/'

const renderField = ({input, type, size, label, prefix, ref, meta: {touched, error}}) => {
  return (
    <div>
      <Input
        {...input}
        ref={ref}
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

const codeRenderField = ({input, type, size, label, prefix, checkMobile, getCode, meta: {touched, error}}) => {
  return (
    <div>
      <InputGroup compact>
        <Input
          {...input}
          type={type}
          size={size}
          placeholder={label}
          prefix={prefix}
          style={{marginBottom: '10px', width: '40%', marginRight: '20px'}}
        />
        <CountDown count={10} checkMobile={checkMobile} getCode={getCode}/>
      </InputGroup>
      {touched && (error && <Alert type="error" message={error} showIcon={true} />)}
    </div>
  )
}



class SignUpForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.checkMobile = this.checkMobile.bind(this)
    this.getCode = this.getCode.bind(this)
  }


  checkMobile() {
    const { value } = this.refs.mobileNode
    if (isUndefined(value) || !phoneReg.test(value)) {
      return false
    } else {
      return true
    }
  }


  getCode() {
    const { value } = this.refs.mobileNode
    this.props.getCode(value)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div className="signup-form, form">
        <h2 className="title">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <Field
            ref="mobileNode"
            name="mobile"
            component={renderField}
            type="text"
            size="large"
            label="手机号"
            prefix={<Icon type="mobile"/>}
          />
          <Field
            checkMobile={this.checkMobile}
            getCode={this.getCode}
            name="code"
            type="text"
            component={codeRenderField}
            type="text"
            label="验证码"
            size="large"
            prefix={<Icon type="message"/>}
          />
          <Field
            name="password"
            component={renderField}
            type="password"
            label="密码"
            size="large"
            prefix={<Icon type="lock"/>}
          />
          <div style={{marginTop: '10px'}}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={submitting}
              size="large"
            >
              注册
            </Button>
          </div>
        </form>
      </div>
    );
  }
}


SignUpForm = reduxForm({
  form: 'signup',
  validate
})(SignUpForm)


export default SignUpForm;

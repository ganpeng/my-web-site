import React, { Component, PropTypes } from 'react';
import { Button } from 'antd'

class CountDown extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 60,
      liked: true
    }
  }






  render() {

    const text = this.state.liked ? '获取验证码': `${this.state.count}秒后重新获取`

    return (
      <Button
        type="primary"
        size="large"
      >{text}</Button>
    );
  }
}

export default CountDown;

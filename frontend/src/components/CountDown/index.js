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
      count: this.props.count || 60,
      liked: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

    if(this.state.liked) {
      this.timer = setInterval(() => {
        let count = this.state.count
        this.state.liked = false
        count--
        if (count < 1) {
          this.setState({
            liked: true,
            count: this.props.count || 60
          })
          clearInterval(this.timer)
        } else {
          this.setState({ count })
        }
      }, 1000)
    }
  }


  render() {

    const text = this.state.liked ? '获取验证码': `${this.state.count}秒后重新获取`

    return (
      <Button
        type="primary"
        size="large"
        disabled={!this.state.liked}
        onClick={this.handleClick}
      >{text}</Button>
    );
  }
}

export default CountDown;

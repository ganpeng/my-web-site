import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Button } from 'antd'

import { setCurrentUser } from '../../actions/auth'

class ProfilePage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  logout() {
    this.props.setCurrentUser({})
    localStorage.removeItem('token')
  }

  render() {
    return (
      <div>
        <h2>ProfilePage</h2>
        <Button
          type="danger"
          size="large"
          onClick={this.logout.bind(this)}
        >
          退出登录
        </Button>
      </div>
    );
  }
}




export default connect(null, { setCurrentUser })(ProfilePage);

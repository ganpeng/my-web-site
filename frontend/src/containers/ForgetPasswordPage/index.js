import React, { Component, PropTypes } from 'react';

class ForgetPasswordPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>ForgetPasswordPage</h3>
      </div>
    );
  }
}

export default ForgetPasswordPage;

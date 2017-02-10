import React, { Component, PropTypes } from 'react';

class SignUpPage extends Component {
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
        <h2>SignUpPage</h2>
      </div>
    );
  }
}

export default SignUpPage;

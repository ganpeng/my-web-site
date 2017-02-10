import React, { Component, PropTypes } from 'react';

import Nav from '../../components/Nav/'

class TestPage extends Component {
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
        <Nav />
      </div>
    );
  }
}

export default TestPage;

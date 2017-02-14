import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom'

import Nav from '../../components/Nav/'
import './style.css'

class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <Nav />
      </div>
    );
  }
}

export default HomePage;

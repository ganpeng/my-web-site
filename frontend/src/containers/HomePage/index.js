import React, { Component, PropTypes } from 'react';
import { Match, Route } from 'react-router-dom'




class HomeItem1 extends Component {
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
        <h3>HomeItem1</h3>
      </div>
    );
  }
}


class HomeItem2 extends Component {
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
        <h3>HomeItem2</h3>
      </div>
    );
  }
}


class HomeItem3 extends Component {
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
        <h3>HomeItem3</h3>
      </div>
    );
  }
}




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
      <div>
        <Route exact={true} path="/" component={HomeItem1} />
        <Route exact={true} path="/" component={HomeItem2} />
        <Route exact={true} path="/" component={HomeItem3} />
      </div>
    );
  }
}

export default HomePage;

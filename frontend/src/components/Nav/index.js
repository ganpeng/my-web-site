import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/signup">SignUp</Link>
      </nav>
    )
  }
}

export default Nav

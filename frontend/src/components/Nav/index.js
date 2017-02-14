import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

import './nav.css'

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
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home">首页</Link>
          </li>
          <li className="nav-item">
            <Link to="/movie">电影</Link>
          </li>
          <li className="nav-item">
            <Link to="/music">音乐 </Link>
          </li>
        </ul>
        <div className="auth-field">
            <Link to="/signup">注册</Link>
            <Link to="/login">登录</Link>
        </div>
      </nav>
    )
  }
}

export default Nav

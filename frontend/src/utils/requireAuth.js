import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function (ComposedComponent) {
  class Authentication extends Component {
    render() {
      const { authenticated } = this.props
      return (
        <div>
          {
            authenticated ? <ComposedComponent {...this.props} /> : (<Redirect to="/login" />) 
          }
        </div>
      )
    }
  }


  function mapStatesToProps(state) {
    return {
      authenticated: state.auth.authenticated
    }
  }

  return connect(mapStatesToProps, {})(Authentication)

}

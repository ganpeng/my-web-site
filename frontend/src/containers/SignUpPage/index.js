import React, { Component, PropTypes } from 'react';


import SignUpForm from '../../components/SignUpForm/'

class SignUpPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(values) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(values)
      }, 3000)
    })
  }

  render() {
    return (
      <div>
        <SignUpForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default SignUpPage;

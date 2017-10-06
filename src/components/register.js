import React, { Component } from 'react';

class Register extends Component {

  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.state = {
      uid: null
    }
  }

  renderLogin() {
    return (
      <nav className="register">
        <button className="github" onClick={() => this.authenticate('github')}>Log in with Github</button>
        <button className="facebook" onClick={() => this.authenticate('facebook')}>Log in with Facebook</button>
      </nav>
    )
  }

  render() {
    //check if not logged in
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    } 

    return (
      <p>Hello!</p>
    )
  }

}

export default Register;
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
  auth,
  providerFacebook,
  providerGitHub,
  providerGoogle,
} from "../firebase.js";


import SignIn from "./signin";
import Home from "./home";

class Main extends Component {
  constructor() {
    super();

    this.loginFacebook = this.loginFacebook.bind(this);
    this.loginGoogle = this.loginGoogle.bind(this);
    this.loginGitHub = this.loginGitHub.bind(this);
  }

  
  loginFacebook() {
    auth.signInWithPopup(providerFacebook).then(result => {
      console.log(result);
      let user = result.user;
      let token = result.credential.accessToken;
      this.setState({ user });
      window.location="/";
    });
  }

  loginGoogle() {
    auth
      .signInWithPopup(providerGoogle)
      .then(result => {
        console.log(result);
        let user = result.user;
        let token = result.credential.accessToken;
        this.setState({ user });
        window.location = "/";        
      });
  }

  loginGitHub() {
    auth
      .signInWithPopup(providerGitHub)
      .then(result => {
        let user = result.user;
        this.setState({ user });
        window.location = "/";  
      });
  }

  render() {
    return <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" render={(...props) => <SignIn loginFacebook={this.loginFacebook} loginGoogle={this.loginGoogle} loginGitHub={this.loginGitHub} />} />
        </Switch>
      </main>;
  }
}

export default Main;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
      <section>
        <p>Please Sign In to Continue</p>
        <div>
          <button
            className="btn-si btn-facebook"
            onClick={this.props.loginFacebook}
          >
            <span class="fa fa-facebook" /> Log in with Facebook
          </button>

          <button
            className="btn-si btn-google"
            onClick={this.props.loginGoogle}
          >
            <span class="fa fa-google" /> Log in with Google!
          </button>

          <button
            className="btn-si btn-github"
            onClick={this.props.loginGitHub}
          >
            <span class="fa fa-github" /> Log in with Github!
          </button>
        </div>

        <Link className="link-return" to="/">
          Go Back!
        </Link>
      </section>
    );
  }
}

export default SignIn;

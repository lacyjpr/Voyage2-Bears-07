import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
      <section>
        <div>
          <button
            className="btn-si btn-facebook"
            onClick={this.props.loginFacebook}
          >
            <span class="fa fa-facebook" /> Log in with Facebook
          </button>

          {/* <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon-svg"
                alt="Google Icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text" onClick={this.props.loginGoogle}>
              <b>Sign in with Google</b>
            </p>
          </div> */}

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

        <Link to="/">Go Back!</Link>
      </section>
    );
  }
}

export default SignIn;

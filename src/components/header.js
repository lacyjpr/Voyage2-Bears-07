import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header group section">
        <Link to="/" className="btn-logo btn styleLink">
          Meet and Code
        </Link>
        <h3 class="tagline">Find and Work with Coders in your Area!</h3>
        <nav className="nav primary-nav">
          <div>
            {this.props.user ? (
              <div>
                <ul>
                  <li>
                    <Link to="profile" className="btn-profile btn styleLink">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="messages" className="btn-messages btn styleLink">
                      Messages
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={this.props.logout}
                      className="btn-login btn styleLink"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <ul>
                  <li>
                    <Link to="signin" className="btn-login btn styleLink">
                      Sign in!
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

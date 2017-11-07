import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <div>
            {this.props.user ? (
              <div>
                <Link to="/" className="btn-logo btn">
                  Meet and Code
                </Link>
                <Link to="profile" className="btn-profile btn">
                  Profile
                </Link>
                <Link to="messages" className="btn-messages btn">
                  Messages
                </Link>
                <button onClick={this.props.logout} className="btn-login btn">
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/" className="btn-logo btn">
                  Meet and Code
                </Link>
                <Link to="signin" className="btn-login btn">
                  Sign in!
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div>
            {this.props.user ? (
              <button onClick={this.props.logout}>Logout</button>
            ) : (
              <div>
                <Link to="signin">Sign in!</Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

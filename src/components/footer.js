import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer class="primary-footer">
        <small>&copy; Meet and Code</small>

        <nav class="nav footer-nav">
          <ul>
            <li>
              <Link className="styleLink" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="styleLink" to="/profile">
                Profile
              </Link>
            </li>

            <li>
              <Link className="styleLink" to="/messages">
                Messages
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;

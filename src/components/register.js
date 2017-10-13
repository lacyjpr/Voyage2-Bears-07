import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button className="btn btn-info">Sign Up</button>
        </form>
        <Link to="/">Go Back!</Link>
      </div>
    );
  }
}

export default Register;
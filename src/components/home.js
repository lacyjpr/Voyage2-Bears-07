import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';
import { auth } from './../firebase.js';

class Home extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        let { dispatch } = this.props;
        dispatch(actions.login(user.uid));
        dispatch(actions.startAddProfile());
      }
    });
  }

  render() {
    return <p>Meet and Code</p>;
  }
}

export default connect()(Home);

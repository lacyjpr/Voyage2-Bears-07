import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';
import { auth } from './../firebase.js';

import Search from './search';
import Map from './map';

class Home extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        let { dispatch } = this.props;
        dispatch(actions.login(user.uid));
      }
    });
  }

  render() {
    return (
      <div>
        <p>Meet and Code</p>
        <Search />
        <Map />
      </div>
    );
  }
}

export default connect()(Home);

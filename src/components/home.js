import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';
import { auth } from './../firebase.js';

import Search from './search';
import Map from './map';
import UsersList from './usersList';

class Home extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        let { dispatch } = this.props;
        dispatch(actions.login(user.uid));
        dispatch(actions.startAddProfile());
      }
    });
  }

  render() {
    return (
      <div>
        <Search className="section" />
        <Map className="section" />
        <UsersList className="section" />
      </div>
    );
  }
}

export default connect()(Home);

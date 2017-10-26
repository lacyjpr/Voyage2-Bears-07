import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';
import { auth } from './../firebase.js';

import Search from './search';
import Map from './map';
import UsersList from './usersList';

class Home extends Component {
  componentDidMount() {
    console.log(this.props.users);
    if (typeof this.props.users !== 'undefined') {
      return;
    } else {
      let { dispatch } = this.props;
      dispatch(actions.startAddUsers());
    }

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
    return (
      <div>
        <p>Meet and Code</p>
        <Search />
        <Map />
        <UsersList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  users: state.users;
};

export default connect(mapStateToProps)(Home);

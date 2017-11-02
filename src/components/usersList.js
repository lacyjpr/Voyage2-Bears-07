import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from './user';

class UsersList extends Component {
  render() {
    if (this.props.auth.uid && this.props.profile) {
      let users = [];
      if (this.props.filteredUsers.length > 0) {
        users = this.props.filteredUsers;
      } else {
        users = this.props.users;
      }
      return users.map(user => {
        return <User key={user.id} user={user} />;
      });
    } else {
      return (
        <div className="noUser">
          You must sign in & complete your profile to view & message users!
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    filteredUsers: state.filteredUsers,
    profile: state.profile.profile,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(UsersList);

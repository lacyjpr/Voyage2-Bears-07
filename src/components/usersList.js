import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersList extends Component {
  render() {
    let users = [];
    if (this.props.filteredUsers.length > 0) {
      users = this.props.filteredUsers;
    } else {
      users = this.props.users;
    }
    console.log(users);
    let currentUsers = users.map(user => {
      return (
        <li key={user.id}>
          <div className="userlist-username">{user.username}</div>
          <div className="userlist-location">{user.location}</div>
        </li>
      );
    });
    return <ul>{currentUsers}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    filteredUsers: state.filteredUsers,
  };
};

export default connect(mapStateToProps)(UsersList);

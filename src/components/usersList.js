import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersList extends Component {
  render() {
    const { users } = this.props;
    const currentUsers = users.map(user => {
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
  };
};

export default connect(mapStateToProps)(UsersList);

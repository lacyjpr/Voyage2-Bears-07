import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UsersList extends Component {
  render() {
    const { users } = this.props;
    const currentUsers = users.map(user => {
      return (
        <li key={user.id}>
          <div className="userlist-username">
            <Link to={`/messages/${user.id}`}>{user.username}</Link>
          </div>
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

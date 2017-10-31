import React, { Component } from 'react';
import { connect } from 'react-redux';

import Send from './send';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSend: false,
    };
    this.toggleShowSend = this.toggleShowSend.bind(this);
  }

  toggleShowSend(e) {
    e.preventDefault();
    this.setState({
      showSend: !this.state.showSend,
    });
  }

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
          <button onClick={this.toggleShowSend}>Message</button>
          <Send
            showSend={this.state.showSend}
            onClose={this.toggleShowSend}
            recipient={user.id}
            recipientName={user.username}
            sender={this.props.auth.uid}
            senderName={this.props.profile.username}
          />
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
    profile: state.profile.profile,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(UsersList);

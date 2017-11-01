import React, { Component } from 'react';
import { connect } from 'react-redux';

//import Send from './send';
import User from './user';

class UsersList extends Component {
  render() {
    if (this.props.auth.uid) {
      let users = [];
      if (this.props.filteredUsers.length > 0) {
        users = this.props.filteredUsers;
      } else {
        users = this.props.users;
      }
      console.log(users);
      return users.map(user => {
        return <User key={user.id} user={user} />;
      });
      // let currentUsers = users.map(user => {
      //   return (
      //     <li key={user.id}>
      //       <div className="userlist-username">{user.username}</div>
      //       <div className="userlist-location">{user.location}</div>
      //       <button onClick={this.toggleShowSend}>Message</button>
      //       <Send
      //         showSend={this.state.showSend}
      //         onClose={this.toggleShowSend}
      //         recipient={user.id}
      //         recipientName={user.username}
      //         sender={this.props.auth.uid}
      //         senderName={this.props.profile.username}
      //       />
      //     </li>
      //   );
      // });
      // console.log('currentUsers: ', currentUsers);
      // return <ul>{currentUsers}</ul>;
    } else {
      return <div className="noUser">You must sign in to view users!</div>;
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

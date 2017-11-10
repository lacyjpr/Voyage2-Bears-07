import React, { Component } from 'react';
import { connect } from 'react-redux';

import Send from './send';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSend: false,
    };
    this.toggleShowSend = this.toggleShowSend.bind(this);
  }

  toggleShowSend() {
    this.setState({
      showSend: !this.state.showSend,
    });
  }

  render() {
    return (
      <aside className="userListing section">
        <div className="userlist-username">{this.props.user.username}</div>
        <div className="userlist-location">{this.props.user.location}</div>
        <button class="userlist-message" onClick={this.toggleShowSend}>
          Message
        </button>
        <Send
          showSend={this.state.showSend}
          onClose={this.toggleShowSend}
          recipient={this.props.user.id}
          recipientName={this.props.user.username}
          sender={this.props.auth.uid}
          senderName={this.props.profile.username}
        />
      </aside>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile.profile,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(User);

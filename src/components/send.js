import React, { Component } from 'react';
import { connect } from 'react-redux';

import './send.css';

class Send extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('sent');
    this.props.onClose();
  }

  render() {
    if (!this.props.showSend) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="modal">
          <p>Send Message</p>
          <p>Recipient: {this.props.recipientName}</p>
          <p>Sender: {this.props.senderName}</p>
          <form onSubmit={this.handleSubmit}>
            <input type="hidden" ref="sender" value={this.props.sender} />
            <input type="hidden" ref="recipient" value={this.props.recipient} />
            <div>
              <input
                type="text"
                className="edit-subject"
                ref="subject"
                placeholder="Subject"
                required
              />
            </div>
            <textarea className="message" />
            <div />
            <button>Send</button>
          </form>

          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
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

export default connect(mapStateToProps)(Send);

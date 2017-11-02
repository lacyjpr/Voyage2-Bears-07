import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import uuidv1 from 'uuid/v1';

import './send.css';

class Send extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.send = this.send.bind(this);
  }

  send(id, recipient, sender, recipientName, senderName, subject, text) {
    const message = {
      id,
      recipient,
      sender,
      recipientName,
      senderName,
      subject,
      text,
    };

    firebase
      .database()
      .ref(`messages/${message.recipient}/${message.id}`)
      .set(message);
  }

  handleSubmit(e) {
    e.preventDefault();
    let id = uuidv1();
    let recipient = this.refs.recipient.value;
    let sender = this.refs.sender.value;
    let recipientName = this.refs.recipientName.value;
    let senderName = this.refs.senderName.value;
    let subject = this.refs.subject.value;
    let text = this.refs.message.value;
    console.log('sent');
    this.send(id, recipient, sender, recipientName, senderName, subject, text);
    this.props.onClose();
  }

  render() {
    if (!this.props.showSend) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="modal">
          <h4 className="message-title">Message</h4>
          <form onSubmit={this.handleSubmit}>
            <input type="hidden" ref="sender" value={this.props.sender} />
            <input type="hidden" ref="recipient" value={this.props.recipient} />
            <div>
              <label htmlFor="recipient-name">Recipient</label>
              <input
                type="text"
                id="recipient-name"
                ref="recipientName"
                value={this.props.recipientName}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="sender-name">Sender</label>
              <input
                type="text"
                id="sender-name"
                ref="senderName"
                value={this.props.senderName}
                readOnly
              />
            </div>
            <div>
              <input
                type="text"
                className="edit-subject"
                ref="subject"
                placeholder="Subject"
                required
              />
            </div>
            <textarea className="message" ref="message" placeholder="message" />
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

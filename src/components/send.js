import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import uuidv1 from 'uuid/v1';

class Send extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.send = this.send.bind(this);
  }

  send(id, recipient, sender, recipientName, senderName, subject, text, date) {
    const message = {
      id,
      recipient,
      sender,
      recipientName,
      senderName,
      subject,
      text,
      date,
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
    let date = Date.now();
    this.send(
      id,
      recipient,
      sender,
      recipientName,
      senderName,
      subject,
      text,
      date
    );
    this.props.onClose();
  }

  render() {
    if (!this.props.showSend) {
      return null;
    }
    return (
      <section className="backdrop">
        <div className="modal">
          <form onSubmit={this.handleSubmit}>
            <input type="hidden" ref="sender" value={this.props.sender} />
            <input type="hidden" ref="recipient" value={this.props.recipient} />

            <fieldset class="messages-form">
              <label className="recipient-Name" htmlFor="recipient-name">
                RECIPIENT
              </label>
              <input
                type="text"
                id="recipient-name"
                ref="recipientName"
                value={this.props.recipientName}
                readOnly
              />

              <label className="sender-Name" htmlFor="sender-name">
                SENDER
              </label>
              <input
                type="text"
                id="sender-name"
                ref="senderName"
                value={this.props.senderName}
                readOnly
              />

              <input
                type="text"
                className="edit-subject"
                ref="subject"
                placeholder="Subject"
                autoFocus
                required
              />

              <textarea
                className="message"
                ref="message"
                placeholder="Message"
              />

              <button className="send-btn">Send</button>
            </fieldset>
          </form>

          <button className="close-btn" onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </section>
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

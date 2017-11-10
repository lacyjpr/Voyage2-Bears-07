import React, { Component } from 'react';
import firebase from 'firebase';

import Send from './send';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSend: false,
    };
    this.toggleShowSend = this.toggleShowSend.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  toggleShowSend() {
    this.setState({
      showSend: !this.state.showSend,
    });
  }

  deleteMessage() {
    firebase
      .database()
      .ref(`messages/${this.props.message.recipient}/${this.props.message.id}`)
      .remove();
  }

  render() {
    return (
      <div className="message-container">
        <div className="username">FROM: {this.props.message.senderName}</div>
        <div className="subject">SUBJECT: {this.props.message.subject}</div>
        <div className="message-text">
          MESSAGE:<br />
          {this.props.message.text}
        </div>
        <button onClick={this.toggleShowSend}>Reply</button>
        <div>
          <button onClick={this.deleteMessage}>Delete</button>
        </div>

        <Send
          showSend={this.state.showSend}
          onClose={this.toggleShowSend}
          recipient={this.props.message.sender}
          recipientName={this.props.message.senderName}
          sender={this.props.message.recipient}
          senderName={this.props.message.recipientName}
        />
      </div>
    );
  }
}

export default Message;

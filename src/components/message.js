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
  }

  toggleShowSend() {
    this.setState({
      showSend: !this.state.showSend,
    });
  }

  //id, recipient, sender, recipientName, senderName, subject, text

  render() {
    return (
      <div className="message">
        <div className="username">From: {this.props.message.senderName}</div>
        <div className="subject">Subject: {this.props.message.subject}</div>
        <div className="message-text">Message: {this.props.message.text}</div>
        <button onClick={this.toggleShowSend}>Reply</button>
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

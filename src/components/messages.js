import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';

class Messages extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    firebase
      .database()
      .ref(`messages/${this.props.auth.uid}`)
      .on('value', snapshot => {
        const currentMessages = snapshot.val();
        console.log(currentMessages);
        const parsedMessages = [];
        if (currentMessages != null) {
          Object.keys(currentMessages).forEach(messageId => {
            parsedMessages.push({
              id: messageId,
              ...currentMessages[messageId],
            });
          });
          this.setState({
            messages: parsedMessages,
          });
          console.log(this.state.messages);
        }
      });
  }

  //id, recipient, sender, recipientName, senderName, subject, text

  render() {
    const currentMessages = this.state.messages.map(message => {
      return (
        <li key={message.id}>
          <div className="username">From: {message.senderName}</div>
          <div className="subject">Subject: {message.subject}</div>
          <div className="message">Message: {message.text}</div>
        </li>
      );
    });

    return (
      <div>
        {this.props.user ? (
          <div>
            <ul>{currentMessages}</ul>
          </div>
        ) : (
          <div>You must sign in to view and submit messages!</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile.profile,
    users: state.users,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Messages);

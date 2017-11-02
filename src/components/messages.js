import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Message from './message';

class Messages extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref(`messages/${this.props.auth.uid}`)
      .on('value', snapshot => {
        const currentMessages = snapshot.val();
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
        }
      });
  }

  render() {
    const currentMessages = this.state.messages.map(message => {
      return <Message key={message.id} message={message} />;
    });

    return (
      <div>
        {currentMessages}
        <div>
          <Link to="/">Go Back!</Link>
        </div>
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

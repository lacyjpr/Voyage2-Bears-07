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
          // Sort by date, newest to oldest. Credit: https://stackoverflow.com/questions/10123953/sort-javascript-object-array-by-date
          parsedMessages.sort(function(a, b) {
            a = new Date(a.date);
            b = new Date(b.date);
            return a > b ? -1 : a < b ? 1 : 0;
          });
          this.setState({
            messages: parsedMessages,
          });
        } else {
          this.setState({
            messages: [],
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
        <div className="return">
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

import React, { Component } from 'react';
import './send.css';

class Send extends Component {
  render() {
    if (!this.props.showSend) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="modal">
          <p>Send Component</p>
          <p>{this.props.recipientName}</p>
          <p>{this.props.senderName}</p>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Send;

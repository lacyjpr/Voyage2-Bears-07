import React, { Component } from 'react';
import './send.css';

class Send extends Component {
  render() {
    return (
      <div className="backdrop">
        <div className="modal">
          <p>Send Component</p>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Send;

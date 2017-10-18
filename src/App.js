import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import { auth } from './firebase.js';

import Search from './components/search';
import Map from './components/map';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null,
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null,
      });
    });
  }

  render() {
    return (
      <div>
        <Header logout={this.logout} user={this.state.user} />
        <Main user={this.state.user} />
      </div>
    );
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }
}

export default App;

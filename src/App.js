import React, { Component } from 'react';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { auth } from './firebase.js';

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
      window.location = '/';
    });
  }

  render() {
    return (
      <div className="main-container">
        <Header logout={this.logout} user={this.state.user} />
        <Main className="main-app" user={this.state.user} />
        <Footer />
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

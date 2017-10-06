import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Register from './register';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
        </Switch>
      </main>
    );
  }
}

export default Main;
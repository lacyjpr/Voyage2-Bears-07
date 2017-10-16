import React, { Component } from 'react';

import Search from './components/search';
import Map from './components/map';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">Meet and code</div>
        <Search />
        <Map />
      </div>
    );
  }
}

export default App;

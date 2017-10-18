import React, { Component } from 'react';

import Search from './search';
import Map from './map';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Meet and Code</p>
        <Search />
        <Map />
      </div>
    );
  }
}

export default Home;

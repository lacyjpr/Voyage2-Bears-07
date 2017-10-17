/* global google */

import React from 'react';
import { connect } from 'react-redux';

class Map extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: this.props.center,
      zoom: 2,
    });
  }

  componentDidUpdate() {
    this.map = new google.maps.Map(this.refs.map, {
      center: this.props.center,
      zoom: 2,
    });
  }

  render() {
    const mapStyle = {
      width: 400,
      height: 400,
    };
    return <div ref="map" style={mapStyle} />;
  }
}

const mapStateToProps = state => {
  return {
    center: state.search.center,
  };
};

export default connect(mapStateToProps)(Map);

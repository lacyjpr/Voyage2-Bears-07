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
    let markers = this.props.users;
    console.log(markers);
    this.map = new google.maps.Map(this.refs.map, {
      center: this.props.center,
      zoom: 2,
    });
    let bounds = new google.maps.LatLngBounds();
    // Loop through the array of markers & place each on the map
    for (let i = 0; i < markers.length; i++) {
      let position = new google.maps.LatLng(
        markers[i].latLng.lat,
        markers[i].latLng.lng
      );
      bounds.extend(position);
      let marker = new google.maps.Marker({
        position: position,
        map: this.map,
      });
      this.map.fitBounds(bounds);
    }
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
    users: state.users,
  };
};

export default connect(mapStateToProps)(Map);

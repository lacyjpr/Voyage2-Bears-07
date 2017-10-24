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
    //let bounds = new google.maps.LatLngBounds();
    console.log(markers);
    this.map = new google.maps.Map(this.refs.map, {
      center: this.props.center,
      zoom: 2,
    });
    let marker;
    // Loop through the array of markers & place each on the map
    for (let i = 0; i < markers.length; i++) {
      let position = new google.maps.LatLng(markers[i].latlng);
      console.log(position);
      //bounds.extend(position);
      marker = new google.maps.Marker({
        position: position,
        map: this.map,
      });
      //this.map.fitBounds(bounds);
    }
    // const boundsListener = google.maps.event.addListener(
    //   this.map,
    //   'bounds_changed',
    //   function(event) {
    //     this.setZoom(14);
    //     google.maps.event.removeListener(boundsListener);
    //   }
    // );
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

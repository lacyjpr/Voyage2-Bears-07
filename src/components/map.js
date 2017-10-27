/* global google */

import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from './../actions/actions';

import * as actions from './../actions/actions';

class Map extends Component {
  componentDidMount() {
    let markers = [];
    if (this.props.filteredUsers.length > 0) {
      markers = this.props.filteredUsers;
    } else {
      markers = this.props.users;
    }
    console.log(this.props.filteredUsers);
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
      // Don't zoom in too far on only one marker
      // Credit: https://stackoverflow.com/questions/3334729/google-maps-v3-fitbounds-zoom-too-close-for-single-marker
      if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
        let extendPoint1 = new google.maps.LatLng(
          bounds.getNorthEast().lat() + 0.01,
          bounds.getNorthEast().lng() + 0.01
        );
        let extendPoint2 = new google.maps.LatLng(
          bounds.getNorthEast().lat() - 0.01,
          bounds.getNorthEast().lng() - 0.01
        );
        bounds.extend(extendPoint1);
        bounds.extend(extendPoint2);
      }
      this.map.fitBounds(bounds);
    }
  }

  componentDidUpdate() {
    let markers = [];
    if (this.props.filteredUsers.length > 0) {
      markers = this.props.filteredUsers;
    } else {
      markers = this.props.users;
    }
    console.log(this.props.filteredUsers);
    console.log(markers);
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
      // Don't zoom in too far on only one marker
      // Credit: https://stackoverflow.com/questions/3334729/google-maps-v3-fitbounds-zoom-too-close-for-single-marker
      if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
        let extendPoint1 = new google.maps.LatLng(
          bounds.getNorthEast().lat() + 0.01,
          bounds.getNorthEast().lng() + 0.01
        );
        let extendPoint2 = new google.maps.LatLng(
          bounds.getNorthEast().lat() - 0.01,
          bounds.getNorthEast().lng() - 0.01
        );
        bounds.extend(extendPoint1);
        bounds.extend(extendPoint2);
      }
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
    filteredUsers: state.filteredUsers,
    users: state.users,
  };
};

export default connect(mapStateToProps)(Map);

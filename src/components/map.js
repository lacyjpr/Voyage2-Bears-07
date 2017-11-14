/* global google */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {
  componentDidMount() {
    let markers = [];
    if (this.props.filteredUsers.length > 0) {
      markers = this.props.filteredUsers;
    } else {
      markers = this.props.users;
    }
    let infowindow = new google.maps.InfoWindow({});
    this.map = new google.maps.Map(this.refs.map, {});
    let bounds = new google.maps.LatLngBounds();
    // Loop through the array of markers & place each on the map
    for (let i = 0; i < markers.length; i++) {
      let contentString =
        '<div id="infowindow"><div>' +
        markers[i].username +
        '</div><div>' +
        markers[i].location +
        '</div></div>';
      let position = new google.maps.LatLng(
        markers[i].latLng.lat,
        markers[i].latLng.lng
      );
      bounds.extend(position);
      let marker = new google.maps.Marker({
        position: position,
        map: this.map,
      });
      marker.addListener('click', function() {
        infowindow.setContent(contentString);
        infowindow.open(this.map, this);
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
    let infowindow = new google.maps.InfoWindow({});
    let bounds = new google.maps.LatLngBounds();
    // Loop through the array of markers & place each on the map
    for (let i = 0; i < markers.length; i++) {
      let contentString =
        '<div id="infowindow"><div>' +
        markers[i].username +
        '</div><div>' +
        markers[i].location +
        '</div></div>';
      let position = new google.maps.LatLng(
        markers[i].latLng.lat,
        markers[i].latLng.lng
      );
      bounds.extend(position);
      let marker = new google.maps.Marker({
        position: position,
        map: this.map,
      });
      marker.addListener('click', function() {
        infowindow.setContent(contentString);
        infowindow.open(this.map, this);
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
    return <section ref="map" className="map section" />;
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

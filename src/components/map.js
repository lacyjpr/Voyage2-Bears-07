/* global google */

import React from 'react';
import { connect } from 'react-redux';
// import * as actions from './../actions/actions';

class Map extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.center);
    this.state = {
      center: this.props.center,
    };
  }
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: this.state.center,
      zoom: 2,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ center: nextProps.center });
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

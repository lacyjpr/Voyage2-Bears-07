import React from 'react';
import Geosuggest from 'react-geosuggest';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';

import HorizontalSlider from './horizontalSlider';
import './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
    let { dispatch } = this.props;
    // Initialize the map with 'United States' as the center
    dispatch(actions.getCenter({ lat: 37.09024, lng: -95.71289100000001 }));
  }

  onSuggestSelect(suggest) {
    let { dispatch } = this.props;
    console.log(suggest);
    let latlng = suggest.location;
    console.log(latlng);
    if (latlng === undefined) {
      console.log('Place not found');
      console.log(this.props.users);
      console.log(this.props.center);
      console.log(this.props.radius);
      dispatch(
        actions.filterUsers(
          this.props.users,
          this.props.center,
          this.props.radius
        )
      );
    } else {
      dispatch(actions.getCenter(latlng));
      console.log(this.props.users);
      console.log(this.props.center);
      console.log(this.props.radius);
      dispatch(
        actions.filterUsers(
          this.props.users,
          this.props.center,
          this.props.radius
        )
      );
    }
  }

  render() {
    return (
      <div>
        <Geosuggest onSuggestSelect={this.onSuggestSelect} />
        <p className="tip">*Search "World" to see all users.</p>
        <HorizontalSlider />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    center: state.search.center,
    radius: state.search.radius,
  };
};

export default connect(mapStateToProps)(Search);

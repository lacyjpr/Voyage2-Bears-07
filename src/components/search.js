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
    this.renderSearch = this.renderSearch.bind(this);

    let { dispatch } = this.props;
    // Initialize the map with 'United States' as the center
    dispatch(actions.getCenter({ lat: 37.09024, lng: -95.71289100000001 }));
  }

  onSuggestSelect(suggest) {
    let { dispatch } = this.props;
    let latlng = suggest.location;
    if (latlng === undefined) {
      console.log('Place not found');
      dispatch(
        actions.filterUsers(
          this.props.users,
          this.props.center,
          this.props.radius
        )
      );
      dispatch(actions.addToCounter());
    } else {
      dispatch(actions.getCenter(latlng));
      dispatch(
        actions.filterUsers(
          this.props.users,
          this.props.center,
          this.props.radius
        )
      );
      // Increment search counter
      dispatch(actions.addToCounter());
    }
  }

  renderSearch = () => {
    // First map load
    if (this.props.filteredUsers.length < 1 && this.props.count < 1) {
      return (
        <div>
          <Geosuggest onSuggestSelect={this.onSuggestSelect} />
          <p className="tip">*Search "World" to see all users.</p>
          <HorizontalSlider />
        </div>
      );
    } else if (this.props.filteredUsers.length < 1 && this.props.count > 0) {
      // More than one map load with zero results
      return (
        <div>
          <Geosuggest onSuggestSelect={this.onSuggestSelect} />
          <p className="tip">*Search "World" to see all users.</p>
          <HorizontalSlider />
          <p className="tip">
            No results in the specified area, showing all users.
          </p>
        </div>
      );
    } else {
      // Normal map load with results
      return (
        <div>
          <Geosuggest onSuggestSelect={this.onSuggestSelect} />
          <p className="tip">*Search "World" to see all users.</p>
          <HorizontalSlider />
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderSearch()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    center: state.search.center,
    radius: state.search.radius,
    filteredUsers: state.filteredUsers,
    count: state.count,
  };
};

export default connect(mapStateToProps)(Search);

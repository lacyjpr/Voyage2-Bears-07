// /* global google */

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
    this.onSuggestNoResults = this.onSuggestNoResults.bind(this);
  }
  onSuggestSelect(suggest) {
    let { dispatch } = this.props;
    console.log(suggest);
    let latlng = suggest.location;
    console.log(latlng);
    dispatch(actions.getCenter(latlng));
  }

  onSuggestNoResults(userInput) {
    console.log('onSuggestNoResults for :' + userInput);
  }

  render() {
    return (
      <div>
        <Geosuggest
          onSuggestSelect={this.onSuggestSelect}
          onSuggestNoResults={this.onSuggestNoResults}
        />
        <HorizontalSlider />
      </div>
    );
  }
}

export default connect()(Search);

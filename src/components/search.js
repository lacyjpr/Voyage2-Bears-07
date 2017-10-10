// /* global google */

import React from "react";
import Geosuggest from "react-geosuggest";
// import { connect } from "react-redux";
//import * as actions from "actions";

import HorizontalSlider from "./horizontalSlider";
import "./search.css";

class Search extends React.Component {
  onSuggestSelect(suggest) {
    console.log(suggest);
    let latlng = suggest.location;
    console.log(latlng);
  }

  onSuggestNoResults(userInput) {
    console.log("onSuggestNoResults for :" + userInput);
  }

  render() {
    return (
      <div>
        <Geosuggest
          // onChange={this.onChange}
          onSuggestSelect={this.onSuggestSelect}
          onSuggestNoResults={this.onSuggestNoResults}
        />
        <HorizontalSlider />
      </div>
    );
  }
}

export default Search;

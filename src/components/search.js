// /* global google */

import React from "react";
import Geosuggest from "react-geosuggest";
// import { connect } from "react-redux";
//import * as actions from "actions";

export class Search extends React.Component {
  onSuggestSelect(suggest) {
    console.log(suggest);
  }

  onSuggestNoResults(userInput) {
    console.log("onSuggestNoResults for :" + userInput); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <Geosuggest
          // onChange={this.onChange}
          onSuggestSelect={this.onSuggestSelect}
          onSuggestNoResults={this.onSuggestNoResults}
        />
      </div>
    );
  }
}

export default Search;

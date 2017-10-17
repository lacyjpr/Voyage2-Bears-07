import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import './horizontalSlider.css';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';

class HorizontalSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.getRadius(this.state.value));
  }

  handleChangeStart = () => {
    console.log('Change event started');
  };

  handleChange = value => {
    this.setState({
      value: value,
    });
  };

  handleChangeComplete = () => {
    console.log('Change event completed');
    const { dispatch } = this.props;
    dispatch(actions.getRadius(this.state.value));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="slider">
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className="value">{value} km</div>
      </div>
    );
  }
}

export default connect()(HorizontalSlider);

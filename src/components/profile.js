import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };

    this.renderProfile = this.renderProfile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.profile.profile);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { dispatch } = this.props;
    let userNameText = this.refs.editUserName.value;
    console.log(userNameText);
    let locationText = this.refs.editLocation.value;
    console.log(locationText);

    if (userNameText.length > 0 && locationText.length > 0) {
      dispatch(actions.startUpdateProfile(userNameText, locationText));
    } else {
      this.refs.editUserName.focus();
    }
  }

  renderProfile = () => {
    let { profile } = this.props;
    if (profile === undefined || profile === null) {
      return (
        <div className="edit-profile">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="edit-user">User Name</label>
              <input
                id="edit-user"
                className="edit-user"
                type="text"
                ref="editUserName"
              />
            </div>

            <div>
              <label htmlFor="edit-location">Location</label>
              <input
                id="edit-location"
                className="edit-location"
                type="Text"
                ref="editLocation"
              />
            </div>

            <button className="submit-profile">Submit Profile</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="profile">
          <p>{profile.userName}</p>
          <p>{profile.location}</p>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h3>Profile</h3>
        {this.renderProfile()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile.profile || {},
  };
};

export default connect(mapStateToProps)(Profile);

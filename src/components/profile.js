import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../actions/actions';
import { auth } from './../firebase.js';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };

    this.renderProfile = this.renderProfile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        let { dispatch } = this.props;
        dispatch(actions.login(user.uid));
        dispatch(actions.startAddProfile());
      }
    });
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

  toggleEdit = () => {
    this.setState({ editable: !this.state.editable });
  };

  renderProfile = () => {
    if (
      this.props.profile === undefined ||
      Object.keys(this.props.profile).length === 0
    ) {
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

            <button type="submit" className="submit-profile">
              Submit Profile
            </button>
          </form>
          <button className="cancelBtn" onClick={this.toggleEdit}>
            Cancel
          </button>
        </div>
      );
    } else if (this.state.editable === true) {
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
                defaultValue={this.props.profile.username}
              />
            </div>

            <div>
              <label htmlFor="edit-location">Location</label>
              <input
                id="edit-location"
                className="edit-location"
                type="Text"
                ref="editLocation"
                defaultValue={this.props.profile.location}
              />
            </div>

            <button type="submit" className="submit-profile">
              Submit Profile
            </button>
          </form>
          <button className="cancelBtn" onClick={this.toggleEdit}>
            Cancel
          </button>
        </div>
      );
    } else {
      console.log(this.props.profile.username);
      console.log(this.props.profile.location);
      console.log(this.props.profile.latLng);
      return (
        <div className="profile">
          <p>User Name: {this.props.profile.username}</p>
          <p>Location: {this.props.profile.location}</p>
          <button className="editTodoBtn" onClick={this.toggleEdit}>
            Edit
          </button>
          <div>
            <Link to="/">Go Back!</Link>
          </div>
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
    profile: state.profile.profile,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Profile);

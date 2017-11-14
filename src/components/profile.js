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
    if (!this.props.profile || Object.keys(this.props.profile).length === 0) {
      return (
        <section className="edit-profile">
          <form onSubmit={this.handleSubmit}>
            <fieldset class="profile-group">
              <label htmlFor="edit-user">USER NAME</label>
              <input
                id="edit-user"
                className="edit-user"
                type="text"
                ref="editUserName"
              />

              <label htmlFor="edit-location">LOCATION</label>
              <input
                id="edit-location"
                className="edit-location"
                type="Text"
                ref="editLocation"
              />

              <button type="submit" className="btn-profile">
                Submit Profile
              </button>
              <button className="btn-cancel" onClick={this.toggleEdit}>
                Cancel
              </button>
            </fieldset>
          </form>
        </section>
      );
    } else if (this.state.editable === true) {
      return (
        <section className="edit-profile">
          <form onSubmit={this.handleSubmit}>
            <fieldset class="profile-group">
              <label htmlFor="edit-user">USER NAME</label>
              <input
                id="edit-user"
                className="edit-user"
                type="text"
                ref="editUserName"
                defaultValue={this.props.profile.username}
              />

              <label htmlFor="edit-location">LOCATION</label>
              <input
                id="edit-location"
                className="edit-location"
                type="Text"
                ref="editLocation"
                defaultValue={this.props.profile.location}
              />
              <section className="profile-buttons">
                <button type="submit" className="btn-submit">
                  Submit Profile
                </button>
                <button className="btn-cancel" onClick={this.toggleEdit}>
                  Cancel
                </button>
              </section>
            </fieldset>
          </form>
        </section>
      );
    } else {
      return (
        <div>
          <section className="profile-group">
            <h2>USER NAME: </h2>
            <p>{this.props.profile.username}</p>
            <h2>LOCATION: </h2>
            <p>{this.props.profile.location}</p>
            <button className="btn-edit" onClick={this.toggleEdit}>
              Edit
            </button>
          </section>
          <div>
            <Link to="/">Go Back!</Link>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderProfile()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile.profile,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Profile);

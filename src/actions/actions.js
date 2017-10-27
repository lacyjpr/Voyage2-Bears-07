/* global google */
import { firebaseRef } from '../firebase';
import axios from 'axios';

export const getRadius = radius => {
  return {
    type: 'SET_RADIUS',
    radius,
  };
};

export const getCenter = center => {
  return {
    type: 'SET_CENTER',
    center,
  };
};

export const login = uid => {
  return {
    type: 'LOGIN',
    uid,
  };
};

export const addProfile = profile => {
  return {
    type: 'ADD_PROFILE',
    profile,
  };
};

export const startUpdateProfile = (userNameText, locationText) => {
  return (dispatch, getState) => {
    const apiURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    const apiKey = '&key=AIzaSyD9kyxI8tmXnAKCJs0YWo2iGVD_R__h7dY';
    let location = locationText;
    let url = `${apiURL}${location}${apiKey}`;
    axios.get(url).then(response => {
      console.log(response.data.status);
      if (response.data.status === 'ZERO_RESULTS') {
        console.log('Error: Place not found');
      } else {
        let latLng = response.data.results[0].geometry.location;
        let profile = {
          username: userNameText,
          location: locationText,
          latLng,
        };
        let uid = getState().auth.uid;
        let profilesRef = firebaseRef.child(`users/${uid}/`).set(profile);

        return profilesRef.then(() => {
          dispatch(addProfile({ profile }));
          window.location = '/profile';
        });
      }
    });
  };
};

export const startAddProfile = () => {
  return (dispatch, getState) => {
    let uid = getState().auth.uid;
    console.log('store ', uid);
    let profileRef = firebaseRef.child(`users/${uid}/`);

    return profileRef.once('value').then(snapshot => {
      let profile = snapshot.val() || {};

      dispatch(addProfile(profile));
    });
  };
};

export const addUsers = users => {
  return {
    type: 'ADD_USERS',
    users,
  };
};

export const startAddUsers = () => {
  return (dispatch, getState) => {
    let profileRef = firebaseRef.child('users/');

    return profileRef.once('value').then(snapshot => {
      let users = snapshot.val() || {};
      let parsedUsers = [];

      // Get users object from firebase into an array
      Object.keys(users).forEach(UID => {
        parsedUsers.push({
          id: UID,
          ...users[UID],
        });
      });
      dispatch(addUsers(parsedUsers));
    });
  };
};

export const addFilteredUsers = filteredUsers => {
  return {
    type: 'ADD_FILTERED_USERS',
    filteredUsers,
  };
};

export const filterUsers = (users, center, radius) => {
  return dispatch => {
    let filteredUsers = [];
    let middle = new google.maps.LatLng(center.lat, center.lng);
    if (center === undefined) {
      filteredUsers = users;
    } else {
      for (let i = 0; i < users.length; i++) {
        let position = new google.maps.LatLng(
          users[i].latLng.lat,
          users[i].latLng.lng
        );
        if (
          google.maps.geometry.spherical.computeDistanceBetween(
            position,
            middle
          ) <=
          radius * 1000
        ) {
          filteredUsers.push(users[i]);
        }
      }
    }
    console.log(filteredUsers);
    dispatch(addFilteredUsers(filteredUsers));
  };
};

export const addToCounter = () => {
  return {
    type: 'INCREMENT',
  };
};

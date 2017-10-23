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
      let latLng = response.data.results[0].geometry.location;
      console.log(latLng);
      let profile = {
        username: userNameText,
        location: locationText,
        latLng,
      };
      let uid = getState().auth.uid;
      console.log('startUpdateProfile ', uid);
      let profilesRef = firebaseRef.child(`users/${uid}/`).set(profile);

      return profilesRef.then(() => {
        dispatch(addProfile({ profile }));
        window.location = '/profile';
      });
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

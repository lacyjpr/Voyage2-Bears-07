import { firebaseRef } from '../firebase';
import axios from 'axios';

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
  const apiURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  const apiKey = '&key=AIzaSyD9kyxI8tmXnAKCJs0YWo2iGVD_R__h7dY';
  let location = locationText;

  let url = `${apiURL}${location}${apiKey}`;
  console.log('URL', url);

  return (dispatch, getState) => {
    let profile = {
      username: userNameText,
      location: locationText,
    };
    let uid = getState().auth.uid;
    console.log('startUpdateProfile ', uid);
    let profilesRef = firebaseRef.child(`users/${uid}/`).set(profile);

    return profilesRef.then(() => {
      dispatch(addProfile({ profile }));
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

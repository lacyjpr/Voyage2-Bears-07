import { firebaseRef } from '../firebase';

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

import { firebaseRef } from '../firebase';

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

export const startAddProfile = () => {
  return (dispatch, getState) => {
    let uid = getState().auth.uid;
    let profileRef = firebaseRef.child(`users/${uid}/profile`);

    return profileRef.once('value').then(snapshot => {
      let profile = snapshot.val() || {};

      dispatch(addProfile(profile));
    });
  };
};

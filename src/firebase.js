import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC06wgcfcUqd6AQtI4tNxJKB6XvD5oDGqY',
  authDomain: 'findacoder-ed89a.firebaseapp.com',
  databaseURL: 'https://findacoder-ed89a.firebaseio.com',
  projectId: 'findacoder-ed89a',
  storageBucket: 'findacoder-ed89a.appspot.com',
  messagingSenderId: '657633106510',
};

firebase.initializeApp(config);
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerGitHub = new firebase.auth.GithubAuthProvider();
export const auth = firebase.auth();
//export const firebaseRef = firebase.database().ref();

export default firebase;

import { combineReducers } from 'redux';
//TODO: Import reduvers here
import auth from './authReducer';
import profile from './profileReducer';

export const reducer = combineReducers({
  //TODO: Add reducers here
  auth,
  profile,
});

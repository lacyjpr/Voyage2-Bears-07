import { combineReducers } from 'redux';
//TODO: Import reduvers here
import search from './searchReducers';
import auth from './authReducer';
import profile from './profileReducer';

export const reducer = combineReducers({
  //TODO: Add reducers here
  search,
  auth,
  profile,
});

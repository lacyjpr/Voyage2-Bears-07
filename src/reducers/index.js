import { combineReducers } from 'redux';
//TODO: Import reduvers here
import search from './searchReducers';
import auth from './authReducer';

export const reducer = combineReducers({
  //TODO: Add reducers here
  search,
  auth,
});

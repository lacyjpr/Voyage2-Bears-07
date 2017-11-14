import { combineReducers } from 'redux';
//TODO: Import reduvers here
import search from './searchReducers';
import auth from './authReducer';
import profile from './profileReducer';
import users from './usersReducer';
import filteredUsers from './filteredUsersReducer';
import count from './counterReducer';

export const reducer = combineReducers({
  //TODO: Add reducers here
  search,
  auth,
  profile,
  users,
  filteredUsers,
  count,
});

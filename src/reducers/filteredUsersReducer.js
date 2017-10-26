export default function users(state = [], action) {
  switch (action.type) {
    case 'ADD_FILTERED_USERS':
      return [...action.filteredUsers];
    default:
      return state;
  }
}

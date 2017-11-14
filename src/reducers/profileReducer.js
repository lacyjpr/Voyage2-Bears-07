export default function profile(state = {}, action) {
  switch (action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
}

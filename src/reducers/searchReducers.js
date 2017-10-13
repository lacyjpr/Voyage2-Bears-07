export default function search(state = {}, action) {
  switch (action.type) {
    case 'SET_RADIUS':
      return {
        radius: action.radius,
      };
    default:
      return state;
  }
}

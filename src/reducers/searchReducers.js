export default function search(state = {}, action) {
  switch (action.type) {
    case 'SET_RADIUS':
      return {
        ...state,
        radius: action.radius,
      };
    case 'SET_CENTER':
      return {
        ...state,
        center: action.center,
      };
    default:
      return state;
  }
}

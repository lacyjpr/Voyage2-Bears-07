export default function messages(state = {}, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: action.messages,
      };

    default:
      console.log('Hello from reducer');
      return state;
  }
}

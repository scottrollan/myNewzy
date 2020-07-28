const INITIAL_STATE = {
  isSignedIn: null,
  id: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, isSignedIn: true, id: action.id };
    case 'SIGN_OUT':
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

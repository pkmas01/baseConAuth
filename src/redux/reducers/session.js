const initialState = {
  token: false,
  isUserLogin: false,
  isAuthenticated: false,
};
const SAVE_TOKEN = 'SAVE_TOKEN';
const TOGGLE_IS_LOGGING = 'TOGGLE_IS_LOGGING';
const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH';
const LOGOUT = 'LOGOUT';


const session = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case TOGGLE_IS_LOGGING:
      return {
        ...state,
        isUserLogin: !state.isUserLogin,
      };
    case TOGGLE_IS_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
export default session;

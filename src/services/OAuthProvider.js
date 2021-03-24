import React, {
  createContext, useContext, useReducer, useEffect,
} from 'react';

const initialState = {
  token: localStorage.getItem('token') || false,
  isUserLogin: localStorage.getItem('isUserLogin') === 'true' || false,
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
};

const OAuthContext = createContext(initialState, undefined);
const { Provider } = OAuthContext;
export const useOAuth = () => useContext(OAuthContext);

const OAuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer((stateIn, action) => {
    const currentState = { ...stateIn };
    switch (action.type) {
      case 'SET_CLIENT_TOKEN':
        return {
          ...currentState, token: action.payload,
        };
      case 'TOGGLE_AUTH':
        return {
          ...currentState, isAuthenticated: !currentState.isAuthenticated,
        };
      case 'TOGGLE_LOGIN':
        return {
          ...currentState, isUserLogin: !currentState.isUserLogin,
        };
      default:
        throw new Error();
    }
  }, initialState);

  useEffect((() => {
    localStorage.setItem('token', state.token);
    localStorage.setItem('isUserLogin', state.isUserLogin);
    localStorage.setItem('isAuthenticated', state.isAuthenticated);
  }), [state]);

  return (
    <Provider value={{
      state,
      dispatch,
    }}
    >
      {children}
    </Provider>
  );
};
export default OAuthProvider;

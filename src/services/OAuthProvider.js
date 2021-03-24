import React, {
  createContext, useState, useContext, useReducer,
} from 'react';
import loginClient from './OAuthServices/loginClient';
import loginUser from './OAuthServices/loginUser';

const OAuthData = {};
const initialState = {
  token: false,
  isUserLogin: false,
  isAuthenticated: false,
};
const OAuthContext = createContext(initialState, undefined);
const { Provider } = OAuthContext;
export const useOAuth = () => useContext(OAuthContext);

const OAuthProvider = ({ children }) => {
  const [token, setToken] = useState(OAuthData);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [state, dispatch] = useReducer((stateIn, action) => {
    const currentState = { ...stateIn };
    switch (action.type) {
      case 'SET_TOKEN':
        return { ...currentState, token: action.payload };
      case 'LOGOUT':
        return { ...currentState, token: false };
      default:
        throw new Error();
    }
  }, initialState);

  const authorizeClient = async () => {
    loginClient().then((r) => {
      const { access_token: accessToken } = r;
      setToken(accessToken);
      setIsUserLogin(false);
      setIsAuthenticated(true);
    });
  };
  const authorizeUser = async (props) => {
    loginUser(props).then((r) => {
      const { access_token: accessToken } = r;
      setToken(accessToken);
      setIsUserLogin(true);
      setIsAuthenticated(true);
    });
  };
  const getAccessTokenSilently = async () => {
    await authorizeClient();
  };
  const logOut = async () => {
    await authorizeClient();
  };
  return (
    <Provider value={{
      token,
      isUserLogin,
      authorizeClient,
      authorizeUser,
      logOut,
      isAuthenticated,
      getAccessTokenSilently,
      state,
      dispatch,
    }}
    >
      {children}
    </Provider>
  );
};
export default OAuthProvider;

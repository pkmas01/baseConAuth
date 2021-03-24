import React, { createContext, useState, useContext } from 'react';
import loginClient from './OAuthServices/loginClient';
import loginUser from './OAuthServices/loginUser';

const OAuthData = {};
const OAuthContext = createContext(undefined, undefined);

export const useOAuth = () => useContext(OAuthContext);

const OAuthProvider = ({ children }) => {
  const [token, setToken] = useState(OAuthData);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
  const logOut = async () => {
    setToken('LOGOUT');
    setIsUserLogin(false);
    const waitingBeforeToken = 1000;
    setTimeout(authorizeClient, waitingBeforeToken);
  };

  const getAccessTokenSilently = async () => {
    await authorizeClient();
  };
  return (
    <OAuthContext.Provider value={{
      token,
      isUserLogin,
      authorizeClient,
      authorizeUser,
      logOut,
      isAuthenticated,
      getAccessTokenSilently,
    }}
    >
      {children}
    </OAuthContext.Provider>
  );
};
export default OAuthProvider;

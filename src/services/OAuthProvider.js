import React, { createContext, useState, useContext } from 'react';

const OAuthData = {};
const OAuthContext = createContext(undefined, undefined);

export const useOAuth = () => useContext(OAuthContext);

const OAuthProvider = ({ children }) => {
  const [token, setToken] = useState(OAuthData);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authorizeClient = () => {
    setToken('ClientToken');
    setIsUserLogin(false);
    setIsAuthenticated(true);
  };
  const authorizeUser = () => {
    setToken('LoginToken');
    setIsUserLogin(true);
    setIsAuthenticated(true);
  };
  const logOut = () => {
    setToken('ClientToken');
    setIsUserLogin(false);
  };

  const getAccessTokenSilently = () => {
    setToken('ClientToken');
    setIsUserLogin(false);
    setIsAuthenticated(true);
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

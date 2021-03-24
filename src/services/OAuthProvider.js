import React, { createContext, useState, useContext } from 'react';

const OAuthData = {};
const OAuthContext = createContext(undefined, undefined);

export const useOAuth = () => useContext(OAuthContext);

const OAuthProvider = ({ children }) => {
  const [token, setToken] = useState(OAuthData);
  const [isUserLogin, setIsUserLogin] = useState(false);

  const loginClient = () => {
    setToken('ClientToken');
    setIsUserLogin(false);
  };
  const loginUser = () => {
    setToken('LoginToken');
    setIsUserLogin(true);
  };
  const logOut = () => {
    setToken('ClientToken');
    setIsUserLogin(false);
  };

  return (
    <OAuthContext.Provider value={{
      token, isUserLogin, loginClient, loginUser, logOut,
    }}
    >
      {children}
    </OAuthContext.Provider>
  );
};
export default OAuthProvider;

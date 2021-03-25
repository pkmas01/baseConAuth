import React, { createContext } from 'react';
import { useLocalObservable } from 'mobx-react';

export const AppContext = createContext(undefined);
const AppStore = ({ children }) => {
  const appStore = useLocalObservable(() => ({
    session: {
      token: false,
      isUserLogin: false,
      isAuthenticated: false,
    },
    addToken: (token) => {
      appStore.session.token = token;
    },
    toggleIsAuth: () => {
      appStore.session.isAuthenticated = !appStore.isAuthenticated;
    },
    toggleIsUserLogin: () => {
      appStore.session.isUserLogin = !appStore.isUserLogin;
    },
  }));

  return (
    <AppContext.Provider value={appStore}>{children}</AppContext.Provider>
  );
};

export default AppStore;

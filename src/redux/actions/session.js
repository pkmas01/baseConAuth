const SAVE_TOKEN = 'SAVE_TOKEN';
const TOGGLE_IS_LOGGING = 'TOGGLE_IS_LOGGING';
const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH';
const LOGOUT = 'LOGOUT';

export const saveToken = token => ({
  type: SAVE_TOKEN,
  token,
});

export const toggleIsUserLogin = () => ({
  type: TOGGLE_IS_LOGGING,
});
export const toggleIsAuthenticated = () => ({
  type: TOGGLE_IS_AUTH,
});
export const logout = () => ({
  type: LOGOUT,
});

import React from 'react';

import { useOAuth } from '../services/OAuthProvider';

export default function TokenTest() {
  const {
    token, isUserLogin, loginClient, loginUser, logOut,
  } = useOAuth();

  return (
    <>
      {isUserLogin && <h1>Estas Dentro</h1>}
      {token.toString()}
      <button type="button" onClick={loginClient}>Login</button>
      <button type="button" onClick={loginUser}>Login User</button>
      <button type="button" onClick={logOut}>LogOut</button>

    </>
  );
}

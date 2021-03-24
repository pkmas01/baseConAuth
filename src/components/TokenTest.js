import React from 'react';

import { useOAuth } from '../services/OAuthProvider';

export default function TokenTest() {
  const {
    token, isUserLogin, authorizeClient, authorizeUser, logOut,
  } = useOAuth();

  return (
    <>
      {isUserLogin && <h1>Estas Dentro</h1>}
      {token.toString()}
      <button type="button" onClick={authorizeClient}>Login</button>
      <button type="button" onClick={authorizeUser}>Login User</button>
      <button type="button" onClick={logOut}>LogOut</button>

    </>
  );
}

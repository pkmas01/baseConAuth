import React from 'react';

import { useOAuth } from '../services/OAuthProvider';

export default function TokenTest() {
  const {
    token, isUserLogin, authorizeClient, authorizeUser, logOut,
  } = useOAuth();

  const handleLoginUserClick = () => {
    const loginData = {
      username: 'samuel.perez@shopadvizor.com',
      password: 'Abcd1234',
    };
    authorizeUser({ ...loginData });
  };
  return (
    <>
      {isUserLogin && <h1>Estas Dentro</h1>}
      <h2>{token.toString()}</h2>
      <button type="button" onClick={authorizeClient}>Login</button>
      <button type="button" onClick={handleLoginUserClick}>Login User</button>
      <button type="button" onClick={logOut}>LogOut</button>

    </>
  );
}

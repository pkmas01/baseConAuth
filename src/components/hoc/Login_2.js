import React from 'react';
import { useOAuth } from '../../services/OAuthProvider';
import UserCard from '../ui/UserCard';
import WithMe from '../containers/WithMe';
import loginUser from '../../services/OAuthServices/loginUser';
import loginClient from '../../services/OAuthServices/loginClient';

const Login2 = () => {
  const {
    state, dispatch,
  } = useOAuth();
  const { isUserLogin, token } = state;
  const handleLoginUserClick = () => {
    const loginData = {
      username: 'samuel.perez@shopadvizor.com',
      password: 'Abcd1234',
    };
    loginUser({ ...loginData }).then((r) => {
      dispatch({ type: 'SET_CLIENT_TOKEN', payload: r?.access_token });
      if (!isUserLogin) {
        dispatch({ type: 'TOGGLE_LOGIN' });
      }
    });
  };
  const handleLogOutClick = () => {
    loginClient().then((r) => {
      dispatch({ type: 'SET_CLIENT_TOKEN', payload: r?.access_token });
      if (isUserLogin) {
        dispatch({ type: 'TOGGLE_LOGIN' });
      }
    });
  };
  return (
    <>
      {isUserLogin
            && (
              <>
                <WithMe>
                  <UserCard />
                </WithMe>
                <button type="button" onClick={handleLogOutClick}>LogOut</button>
              </>
            )}
      {!isUserLogin
            && (
              <>
                {token}
                <button type="button" onClick={handleLoginUserClick}>Login User</button>
              </>
            )}
    </>
  );
};
export default Login2;

import React from 'react';
import { useOAuth } from '../../services/OAuthProvider';
import UserCard from '../ui/UserCard';
import WithMe from '../containers/WithMe';

const Login2 = () => {
  const {
    state,
  } = useOAuth();
  const { isUserLogin, token } = state;
  const handleLoginUserClick = () => {
    const loginData = {
      username: 'samuel.perez@shopadvizor.com',
      password: 'Abcd1234',
    };
  };
  const handleLogOutClick = () => {

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

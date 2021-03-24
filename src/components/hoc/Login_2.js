import React from 'react';
import { useOAuth } from '../../services/OAuthProvider';
import UserCard from '../ui/UserCard';
import WithMe from '../containers/WithMe';

const Login2 = () => {
  const {
    isUserLogin, authorizeUser, logOut,
  } = useOAuth();

  const handleLoginUserClick = () => {
    const loginData = {
      username: 'samuel.perez@shopadvizor.com',
      password: 'Abcd1234',
    };
    authorizeUser({ ...loginData });
  };
  const handleLogOutClick = () => {
    logOut();
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
            && (<button type="button" onClick={handleLoginUserClick}>Login User</button>)}
    </>
  );
};
export default Login2;

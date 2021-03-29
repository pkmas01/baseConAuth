import React from 'react';
import UserCard from '../ui/UserCard';
import WithMe from '../containers/WithMe';

const Login = () => {
  const {
    isUserLogin,
  } = {
    isUserLogin: false,
  };

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
            && (<button type="button" onClick={handleLoginUserClick}>Login User</button>)}
    </>
  );
};
export default Login;

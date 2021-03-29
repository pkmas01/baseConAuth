import React from 'react';
import { useReactiveVar } from '@apollo/client';
import UserCard from '../ui/UserCard';
import WithMe from '../containers/WithMe';
import { tokenVar, isLoggedInVar } from '../../services/cache';
import loginUser from '../../services/REST/loginUser';
import loginClient from '../../services/REST/loginClient';

const Login = () => {
  const {
    isUserLogin,
  } = {
    isUserLogin: useReactiveVar(isLoggedInVar),
  };

  const handleLoginUserClick = () => {
    const loginData = {
      username: 'samuel.perez@shopadvizor.com',
      password: 'Abcd1234',
    };
    loginUser(loginData).then((result) => {
      isLoggedInVar(true);
      tokenVar(result.access_token);
    });
  };
  const handleLogOutClick = () => {
    loginClient().then((result) => {
      isLoggedInVar(false);
      tokenVar(result.access_token);
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
            && (<button type="button" onClick={handleLoginUserClick}>Login User</button>)}
    </>
  );
};
export default Login;

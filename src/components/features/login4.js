import React, { useContext } from 'react';

import { useObserver } from 'mobx-react';
import UserCard from '../ui/UserCard';
import WithMe from '../containers/WithMe';
import AppStoreContext, { AppContext } from '../../store/AppStoreContext';

const Login4 = () => {
  const store = useContext(AppContext);
  const token = () => useObserver(() => store.token);
  const isUserLogin = () => useObserver(() => store.isUserLogin);
  // eslint-disable-next-line no-console
  console.log(store.token);
  // eslint-disable-next-line no-console
  console.log(token);
  // eslint-disable-next-line no-console
  console.log(isUserLogin);
  const handleLoginUserClick = () => {
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
export default Login4;

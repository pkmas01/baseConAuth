import React from 'react';
import { connect } from 'react-redux';
import UserCard from '../ui/UserCard';
import WithMe from '../containers/WithMe';
import loginUser from '../../utils/OAuthServices/loginUser';
import { saveToken, toggleIsUserLogin } from '../../redux/actions/session';
import loginClient from '../../utils/OAuthServices/loginClient';

const Login2 = (props) => {
  const { dispatch, isUserLogin, token } = props;
  const handleLoginUserClick = () => {
    const loginData = {
      username: 'samuel.perez@shopadvizor.com',
      password: 'Abcd1234',
    };
    loginUser({ ...loginData }).then((r) => {
      const { access_token: accessToken } = r;
      dispatch(saveToken(accessToken));
      if (!isUserLogin) {
        dispatch(toggleIsUserLogin());
      }
    });
  };
  const handleLogOutClick = () => {
    loginClient().then((r) => {
      const { access_token: accessToken } = r;
      dispatch(saveToken(accessToken));
      if (isUserLogin) {
        dispatch(toggleIsUserLogin());
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
                <p style={{ width: '800px', wordBreak: 'break-word' }}> {token}</p>
                <button type="button" onClick={handleLoginUserClick}>Login User</button>
              </>
            )}
    </>
  );
};

const mapStateToProps = state => ({
  token: state.session.token,
  isUserLogin: state.session.isUserLogin,
});
export default connect(mapStateToProps)(Login2);

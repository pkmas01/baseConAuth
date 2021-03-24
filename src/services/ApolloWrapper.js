import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { saveToken, toggleIsAuthenticated } from '../redux/actions/session';
import loginClient from '../utils/OAuthServices/loginClient';


const ApolloWrapper = ({
  children, token, isAuthenticated, dispatch,
}) => {
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL,
  });
  useEffect(() => {
    if (!isAuthenticated && !token) {
      loginClient().then((result) => {
        const { access_token: accessToken } = result;
        dispatch(saveToken(accessToken));
        if (!isAuthenticated) {
          dispatch(toggleIsAuthenticated());
        }
      });
    }
  }, []);

  const authLink = setContext((_, { headers, ...rest }) => {
    if (!token) return { headers, ...rest };

    return {
      ...rest,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
  if ((!isAuthenticated)) return (<>APP LOADING</>);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const mapStateToProps = state => ({
  token: state.session.token,
  isAuthenticated: state.session.isAuthenticated,
});
export default connect(mapStateToProps)(ApolloWrapper);

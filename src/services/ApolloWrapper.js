import React, { useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { useOAuth } from './OAuthProvider';
import loginClient from './OAuthServices/loginClient';

function ApolloWrapper({ children }) {
  const {
    state, dispatch,
  } = useOAuth();
  const { token, isAuthenticated } = state;
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const getToken = async () => (isAuthenticated
      ? token
      : loginClient().then(r => r?.access_token));
    getToken().then((r) => {
      if (!isAuthenticated) {
        dispatch({ type: 'SET_CLIENT_TOKEN', payload: r });
        dispatch({ type: 'TOGGLE_AUTH' });
      }
    });
  }, [isAuthenticated]);

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
}

export default ApolloWrapper;

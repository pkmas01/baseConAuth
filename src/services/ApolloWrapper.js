import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useOAuth } from './OAuthProvider';


function ApolloWrapper({ children }) {
  const [bearerToken, setBearerToken] = useState('');
  const {
    token, isAuthenticated, getAccessTokenSilently,
  } = useOAuth();
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000',
  });

  useEffect(() => {
    const getToken = async () => (isAuthenticated ? token : getAccessTokenSilently());
    getToken().then(r => setBearerToken(r));
  }, [getAccessTokenSilently, isAuthenticated]);

  const authLink = setContext((_, { headers, ...rest }) => {
    if (!bearerToken) return { headers, ...rest };

    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer: ${bearerToken}`,
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloWrapper;

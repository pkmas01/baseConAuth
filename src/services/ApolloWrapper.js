import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
  makeVar,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import typeDefs from './graphQl/queries/typeDefs';
import loginClient from './OAuthServices/loginClient';


// Initializes to true if localStorage includes a 'token' key,
// false otherwise
export const isUserLoginVar = makeVar(false);
export const tokenVar = makeVar('');
export const isAuthenticatedVar = makeVar(false);

function ApolloWrapper(props) {
  const { children } = props;
  const [token, setToken] = useState(tokenVar());
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedVar());
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const getToken = async () => (isAuthenticated
      ? token
      : loginClient().then(r => r?.access_token));
    getToken().then((r) => {
      if (!isAuthenticated) {
        isAuthenticatedVar(true);
        setIsAuthenticated(true);
      }
      tokenVar(r);
      setToken(r);
    });
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
    typeDefs,
    typePolicies: {
      Query: {
        fields: {
          isUserLogin: {
            read() {
              return isUserLoginVar();
            },
          },
          token: {
            read() {
              return tokenVar();
            },
          },
          isAuthenticated: {
            read() {
              return isAuthenticatedVar();
            },
          },
          launches: {
            // ...field policy definitions...
          },
        },
      },
    },
  });
  if ((!isAuthenticated)) return (<>APP LOADING</>);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloWrapper;

import React, { useEffect, useState, localStorage } from 'react';
import {
  ApolloClient,
  HttpLink,
  ApolloProvider,
  useReactiveVar,
} from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { setContext } from '@apollo/client/link/context';
import loginClient from './REST/loginClient';
import ApolloCache, { tokenVar, isAuthenticatedVar, isLoggedInVar } from './cache';
import typeDefs from './graphQl/queries/typeDefs';


function ApolloWrapper(props) {
  const { children } = props;
  const token = useReactiveVar(tokenVar);
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);


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
      }
      tokenVar(r);
      window.localStorage.setItem('token', r);
    });
  }, [token]);

  useEffect(() => {}, [isAuthenticated]);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('isLogg');
    window.localStorage.setItem('isLoggedIn', 'true');
  }, [isLoggedIn]);

  const authLink = setContext((_, { headers, ...rest }) => ({
    ...rest,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }));

  const client = new ApolloClient({
    typeDefs,
    link: authLink.concat(httpLink),
    cache: ApolloCache,
  });
  persistCache({
    cache: ApolloCache,
    storage: new LocalStorageWrapper(window.localStorage),
    debug: true,
    maxSize: false,
  }).then(() => {
    // eslint-disable-next-line no-console
    console.log('opaso');
  });
  // eslint-disable-next-line no-console
  console.log(window.localStorage);
  if ((!isAuthenticated)) return (<>APP LOADING</>);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloWrapper;

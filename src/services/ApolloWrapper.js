import React, { useEffect, useContext, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from '@apollo/client';
import { observer } from 'mobx-react';
import { setContext } from '@apollo/client/link/context';
import loginClient from './OAuthServices/loginClient';
import { AppContext } from '../store/AppStoreContext';

function ApolloWrapper(props) {
  // eslint-disable-next-line no-console
  console.log(props);
  const { children } = props;
  const store = useContext(AppContext);
  const { token: sessionToken, isAuthenticated: sessionIsAuthenticated } = store.session;
  const [token, setToken] = useState(sessionToken);
  const [isAuthenticated, setIsAuthenticated] = useState(sessionIsAuthenticated);

  // eslint-disable-next-line no-console
  console.log(token);
  // eslint-disable-next-line no-console
  console.log(isAuthenticated);

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('enntro....');
    const getToken = async () => (isAuthenticated
      ? token
      : loginClient()
    );
    // eslint-disable-next-line no-console
    console.log(getToken);
    getToken().then((r) => {
      if (!isAuthenticated) {
        const { access_token: accessToken } = r;
        // eslint-disable-next-line no-console
        console.log(token);
        store.addToken(accessToken);
        // eslint-disable-next-line no-console
        console.log(store.session.token);
        store.toggleIsAuth();
      }
    });
  }, [true, isAuthenticated, token]);

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

export default observer(({ session }) => <ApolloWrapper />);

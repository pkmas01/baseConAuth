import { InMemoryCache, makeVar } from '@apollo/client';

const ApolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isUserLogin: {
          read() {
            // eslint-disable-next-line no-use-before-define
            return isLoggedInVar();
          },
        },
        token: {
          read() {
            // eslint-disable-next-line no-use-before-define
            return tokenVar();
          },
        },
        isAuthenticated: {
          read() {
            // eslint-disable-next-line no-use-before-define
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

export default ApolloCache;

export const isLoggedInVar = makeVar(window.localStorage.getItem('isLoggedIn') === 'true' || false);
export const tokenVar = makeVar(window.localStorage.getItem('token') || false);
export const isAuthenticatedVar = makeVar(!!window.localStorage.getItem('token'));

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

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar('');
export const isAuthenticatedVar = makeVar(false);

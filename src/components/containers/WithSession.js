import React, { cloneElement } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import TOKEN from '../../services/graphQl/queries/getToken';
import IS_AUTH from '../../services/graphQl/queries/isAuthenticated';
import IS_LOGGED_IN from '../../services/graphQl/queries/isUserLogin';
import { tokenVar } from '../../services/cache';

const WithSession = (props) => {
  const { children } = props;
  const { loading: tokenLoading, error: tokenError, data: tokenData } = useQuery(TOKEN, {});
  const { loading: authLoading, error: authError, data: authData } = useQuery(IS_AUTH, {});
  const { loading: userLoading, error: userError, data: userData } = useQuery(IS_LOGGED_IN, {});
  const token = useReactiveVar(tokenVar);
  if (tokenLoading) {
    return 'LOADING.....';
  } if (tokenError) {
    return `${tokenError.message} ERROR....`;
  }

  return (
    <>
      {cloneElement(children, {
        ...props,
        session: {
          tokenData, authData, userData, react: token,
        },
      })}
    </>
  );
};

export default WithSession;

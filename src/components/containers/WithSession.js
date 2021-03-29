import React, { cloneElement } from 'react';
import { useQuery } from '@apollo/client';
import TOKEN from '../../services/graphQl/queries/getToken';
import IS_AUTH from '../../services/graphQl/queries/isAuthenticated';
import IS_LOGGED_IN from '../../services/graphQl/queries/isUserLogin';


const WithSession = (props) => {
  const { children } = props;
  const { loading: tokenLoading, error: tokenError, data: tokenData } = useQuery(TOKEN, {});
  const { loading: authLoading, error: authError, data: authData } = useQuery(IS_AUTH, {});
  const { loading: userLoading, error: userError, data: userData } = useQuery(IS_LOGGED_IN, {});

  if (tokenLoading) {
    return 'LOADING.....';
  } if (tokenError) {
    return `${tokenError.message} ERROR....`;
  }
  // eslint-disable-next-line no-console
  console.log(tokenData);

  return (
    <>
      {cloneElement(children, { ...props, session: { tokenData, authData, userData } })}
    </>
  );
};

export default WithSession;

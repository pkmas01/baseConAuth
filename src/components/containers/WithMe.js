import React, { cloneElement } from 'react';
import { useQuery } from '@apollo/client';
import Me from '../../graphQl/queries/Me';


const WithMe = (props) => {
  const { children } = props;
  const { loading, error, data } = useQuery(Me, {});

  if (loading) {
    return 'LOADING.....';
  } if (error) {
    return `${error.message} ERROR....`;
  }
  const { me } = data;

  return (
    <>
      {cloneElement(children, { ...props, me })}
    </>
  );
};

export default WithMe;

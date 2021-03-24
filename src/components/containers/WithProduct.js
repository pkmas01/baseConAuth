import React, { cloneElement } from 'react';
import { useQuery } from '@apollo/client';
import PRODUCT_BY_EAN_QUERY from '../../services/graphQl/queries/ProductByEan';


const WithProduct = (props) => {
  const { ean, children } = props;
  // eslint-disable-next-line no-console
  console.log(props);
  // eslint-disable-next-line no-console
  console.log(ean);
  const { loading, error, data } = useQuery(
    PRODUCT_BY_EAN_QUERY,
    {
      variables: {
        ean,
      },
    },
  );

  if (loading) {
    return 'LOADING.....';
  } if (error) {
    return `${error.message} ERROR....`;
  }
  const { productByEan } = data;

  return (
    <section data-testid="ProductContainer">
      {cloneElement(children, { ...props, product: productByEan })}
    </section>
  );
};

export default WithProduct;

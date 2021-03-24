import React from 'react';
import { useQuery } from '@apollo/client';
import PRODUCT_BY_EAN_QUERY from '../../services/graphQl/queries/ProductByEan';
import ProductDetailCard from '../ui/ProductDetailCard';

const ProductContainer = (props) => {
  const { type, ean, children } = props;
  const { loading, error, data } = useQuery(
    PRODUCT_BY_EAN_QUERY,
    {
      variables: {
        ean,
      },
    },
  );

  const SetContent = (item) => {
    const { product } = item;
    switch (type) {
      case 'PRODUCT_DETAIL':
      default:
        return (<ProductDetailCard product={product} />);
    }
  };

  if (loading) {
    return 'LOADING.....';
  } if (error) {
    return `${error.message} ERROR....`;
  }
  const { productByEan } = data;
  // {children({ ...props, productByEan })}
  return (
    <section data-testid="ProductContainer">
      <SetContent product={productByEan} />
    </section>
  );
};

export default ProductContainer;

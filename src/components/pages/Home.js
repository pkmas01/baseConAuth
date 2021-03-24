import React from 'react';
import TokenTest from '../ui/TokenTest';
import WithProduct from '../containers/WithProduct';
import ProductDetailCard from '../ui/ProductDetailCard';

const Home = () => {
  const ean = '3608580759768';


  return (
    <>
      <TokenTest />
      <WithProduct ean={ean}>
        <ProductDetailCard />
      </WithProduct>
    </>
  );
};

export default Home;

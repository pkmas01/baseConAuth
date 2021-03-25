import React from 'react';
import Login4 from '../components/features/login4';
import WithProduct from '../components/containers/WithProduct';
import ProductDetailCard from '../components/ui/ProductDetailCard';

const Home = () => {
  const ean = '3608580759768';

  return (
    <>
      <Login4 />
      <WithProduct ean={ean}>
        <ProductDetailCard />
      </WithProduct>
    </>
  );
};

export default Home;

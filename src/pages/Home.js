import React from 'react';
import Login from '../components/layout/Login';
import WithProduct from '../components/containers/WithProduct';
import ProductDetailCard from '../components/ui/ProductDetailCard';

const Home = () => {
  const ean = '3608580759768';


  return (
    <>
      <Login />
      <WithProduct ean={ean}>
        <ProductDetailCard />
      </WithProduct>
    </>
  );
};

export default Home;

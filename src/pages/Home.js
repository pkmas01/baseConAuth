import React from 'react';
import Login3 from '../components/features/Login3';
import WithProduct from '../components/containers/WithProduct';
import ProductDetailCard from '../components/ui/ProductDetailCard';

const Home = () => {
  const ean = '3608580759768';


  return (
    <>
      <Login3 />
      <WithProduct ean={ean}>
        <ProductDetailCard />
      </WithProduct>
    </>
  );
};

export default Home;

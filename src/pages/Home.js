import React from 'react';
import Login4 from '../components/hoc/Login4';
import WithProduct from '../components/containers/WithProduct';
import WithSession from '../components/containers/WithSession';
import ProductDetailCard from '../components/ui/ProductDetailCard';

const Home = () => {
  const ean = '3608580759768';


  return (
    <>
      <WithSession>
        <Login4 />
      </WithSession>
      <WithProduct ean={ean}>
        <ProductDetailCard />
      </WithProduct>
    </>
  );
};

export default Home;

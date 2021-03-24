import React from 'react';
import Login2 from '../components/hoc/Login_2';
import WithProduct from '../components/containers/WithProduct';
import ProductDetailCard from '../components/ui/ProductDetailCard';

const Home = () => {
  const ean = '3608580759768';


  return (
    <>
      <Login2 />
      <WithProduct ean={ean}>
        <ProductDetailCard />
      </WithProduct>
    </>
  );
};

export default Home;

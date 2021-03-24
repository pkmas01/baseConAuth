import React from 'react';
import TokenTest from './components/ui/TokenTest';
import ProductByEan from './components/containers/productByEan';

const App = () => (
  <>
    <TokenTest />
    <ProductByEan ean="3608580759768" />
  </>
);

export default App;

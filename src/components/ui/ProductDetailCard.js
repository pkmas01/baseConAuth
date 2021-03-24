import React from 'react';

const ProductDetailCard = (props) => {
  const { product } = props;
  const {
    name, description, category, ean,
  } = product;
  const { name: categoryName } = category;

  return (
    <>
      <h2>{name}: {ean}</h2>
      <h3>{categoryName}</h3>
      <p>{description} </p>
    </>
  );
};

export default ProductDetailCard;

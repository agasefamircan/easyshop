import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ products }) => {
  const { productId } = useParams();

  const product = products.find((item) => item.id == productId);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return(
  <>
    <h2>{product.title}</h2>
    <img src={product.image}/>
  </>
  );
};

export default Product;

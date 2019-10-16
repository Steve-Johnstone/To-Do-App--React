import React from "react";

function Product(props) {
  return (
    <div>
      <h1>Product: {props.product.name}</h1>
      <h2>Cost: {props.product.cost}</h2>
      <h3>Description: {props.product.description}</h3>
    </div>
  );
}

export default Product;

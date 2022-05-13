import React from "react";
import Product from "./Product.js";

//export default function ProductList(product)
export default function ProductList(props) {
  return props.p.length > 0 ? (
    props.p.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          pro={props.p}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
        />
      );
    })
   ): (
    <h1>No Product in the cart</h1>
  );
}

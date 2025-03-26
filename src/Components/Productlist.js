import React from "react";
import Product from "./Product.js";

export default function Productlist(props) {
  return (
    <>
      {props.productList.length === 0 ? (
        <h2 className="text-center text-muted">No Item Found</h2>
      ) : (
        props.productList.map((product, i) => (
          <Product
            product={product}
            key={i}
            index={i}
            incrementQuantity={() => props.incrementQuantity(i)}
            decrementQuantity={() => props.decrementQuantity(i)}
            removeItem={() => props.removeItem(i)}
          />
        ))
      )}
    </>
  );
}

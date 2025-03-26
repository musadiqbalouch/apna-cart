import React from "react";

export default function Product(props) {
  console.log(props.product); // Debugging

  return (
    <div className="row mt-2">
      <div className="col-5">
        <h2>
          {props.product.name}{" "}
          <span className="badge text-bg-secondary">
            {" "}
            ₹{props.product.price}
          </span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          {/* ✅ Decrement button now works! */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={props.decrementQuantity}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          {/* ✅ Increment button already works */}
          <button
            type="button"
            className="btn btn-success"
            onClick={props.incrementQuantity}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
  {props.product.quantity * props.product.price}
</div>
<div className="col-2 btn btn-danger" onClick={() => props.removeItem(props.index)}>
  Remove
</div>

    </div>
  );
}

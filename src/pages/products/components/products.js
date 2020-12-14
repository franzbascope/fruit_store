import React from "react";
import products from "..";
export default (props) => {
  // attributes
  const { name, price, features, image, cart } = props;
  // actions
  const { addToCart, removeFromCart, addQuantity, decreaseQuantity } = props;
  return (
    <div class="col">
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 fw-normal">{name}</h4>
        </div>
        <div class="card-body">
          <img
            src={image}
            alt="frutaImagen"
            style={{ height: 100, margin: 10 }}
          />
          <h1 class="card-title pricing-card-title">${price}</h1>
          <ul class="list-unstyled mt-3 mb-4">
            {features.map((feature) => {
              return <li>{feature}</li>;
            })}
          </ul>
          {cart ? (
            <React.Fragment>
              <div className="mt-3 mb-3" style={{ textAlign: "left" }}>
                <strong className="size-lg" style={{ fontSize: 16 }}>
                  Subtotal:
                </strong>
                <span className="ml-3" style={{ fontSize: 16 }}>
                  {props.subtotal.toFixed(2)}
                </span>
              </div>
              {props.children}
              <button
                onClick={() => {
                  removeFromCart(props.name);
                }}
                type="button"
                className="w-100 btn btn-lg btn-outline-danger"
              >
                Remove
              </button>
            </React.Fragment>
          ) : (
            <button
              onClick={() => {
                addToCart(props.name);
              }}
              type="button"
              class="w-100 btn btn-lg btn-outline-primary"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Product from "./components/products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addProductQuantity,
  decreaseProductQuantity,
  addProductCart,
  removeProductCart,
} from "../../state/actions/products";
export default () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Buy a fruit</h1>
        <p class="lead">Here we got the best fruits.</p>
      </div>

      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {products.map((product, index) => {
          const { name, price, features, image, cart } = product;
          return (
            <Product
              addToCart={(name) => {
                dispatch(addProductCart(name));
              }}
              key={index}
              id={index}
              name={name}
              price={price}
              features={features}
              image={image}
              cart={cart}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

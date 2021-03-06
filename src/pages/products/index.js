import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Product from "./components/products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addProductQuantity,
  decreaseProductQuantity,
  addProductCart,
  removeProductCart,
} from "../../state/actions/products";
import Quantity from "./components/quantity";
import { Button } from "react-bootstrap";
export default () => {
  const products = useSelector((state) => state.products);
  const actions = useSelector((state) => state.actions);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const calculateTotal = (products) => {
    let total = 0;
    for (let product of products) {
      if (product.subtotal) {
        total += product.subtotal;
      }
    }
    return total;
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actions Done</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            {actions.map((action, index) => {
              return (
                <li>
                  <p>
                    Se realizo la accion: <strong>{action.type}</strong>
                    en el producto: <strong>{action.product}</strong>
                  </p>
                </li>
              );
            })}
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
              removeFromCart={(name) => {
                dispatch(removeProductCart(name));
              }}
              key={index}
              id={index}
              name={name}
              price={price}
              features={features}
              image={image}
              cart={cart}
              subtotal={product.subtotal ? product.subtotal : 0}
            >
              <Quantity
                quantity={product.quantity ? product.quantity : 1}
                add={() => {
                  dispatch(addProductQuantity(name));
                }}
                decrease={() => {
                  dispatch(decreaseProductQuantity(name));
                }}
              />
            </Product>
          );
        })}
      </div>
      {calculateTotal(products) > 0 ? (
        <React.Fragment>
          <div className="mt-3 mb-3">
            <strong className="size-lg" style={{ fontSize: 20 }}>
              Total:
            </strong>
            <span className="ml-3" style={{ fontSize: 20 }}>
              {calculateTotal(products).toFixed(2)}
            </span>
          </div>
          <Button variant="primary" size="lg" block onClick={handleShow}>
            Checkout
          </Button>
        </React.Fragment>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

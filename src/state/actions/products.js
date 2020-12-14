import { ProductTypes } from "../types/products";

const addProductCart = (name) => {
  return { type: ProductTypes.ADD_PRODUCT_CART, name };
};

const removeProductCart = (name) => {
  return { type: ProductTypes.REMOVE_PRODUCT_CART, name };
};

const addProductQuantity = (name) => {
  return { type: ProductTypes.ADD_PRODUCT_QUANTITY, name };
};

const decreaseProductQuantity = (name) => {
  return { type: ProductTypes.DECREASE_PRODUCT_QUANTITY, name };
};

export {
  addProductCart,
  removeProductCart,
  addProductQuantity,
  decreaseProductQuantity,
};

import { ProductTypes } from "../types/products";
import { products } from "./mocks/products";

const initialStateProducts = {
  products: products,
  actions: [],
};

export const ProductsReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case ProductTypes.ADD_PRODUCT_QUANTITY:
      return {
        ...state,
        products: addProductQuantity(action.name, state.products),
      };
    case ProductTypes.ADD_PRODUCT_CART:
      debugger;
      return {
        ...state,
        products: addProductCart(action.name, state.products),
      };
    case ProductTypes.REMOVE_PRODUCT_CART:
      return {
        ...state,
        products: removeProductCart(action.name, state.products),
      };
    case ProductTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: decreaseProductQuantity(action.name, state.products),
      };
    default:
      return state;
  }
};

const addProductCart = (name, product_list) => {
  return product_list.map((product) => {
    if (product.name === name) {
      return {
        ...product,
        cart: true,
        quantity: 1,
        subtotal: parseInt(product.price),
      };
    } else return product;
  });
};
const removeProductCart = (name, product_list) => {
  return product_list.map((product) => {
    if (product.name === name) {
      return {
        ...product,
        cart: false,
        quantity: 0,
        subtotal: 0,
      };
    } else return product;
  });
};
const addProductQuantity = (name, product_list) => {
  return product_list.map((product) => {
    if (product.name === name) {
      let quantity = product.quantity + 1;
      return {
        ...product,
        quantity: quantity,
        subtotal: quantity * product.price,
      };
    } else return product;
  });
};
const decreaseProductQuantity = (name, product_list) => {
  return product_list.map((product) => {
    if (product.name === name) {
      let quantity = product.quantity - 1 < 1 ? 1 : product.quantity - 1;
      return {
        ...product,
        quantity: quantity,
        subtotal: quantity * product.price,
      };
    } else return product;
  });
};

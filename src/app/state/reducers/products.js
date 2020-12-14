import { ProductTypes } from "../types/productTypes";

const initialStateProducts = {
  products: [],
  loading: false,
  error: "",
};

export const mainReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case ProductTypes.ADD_PRODUCT_QUANTITY:
      return {
        ...state,
        products: this.addProductQuantity(action.product_id, state.products),
      };
    case ProductTypes.ADD_PRODUCT_CART:
      return {
        ...state,
        products: this.addProductCart(action.product_id, state.products),
      };
    case ProductTypes.REMOVE_PRODUCT_CART:
      return {
        ...state,
        products: this.removeProductCart(action.product_id, state.products),
      };
    case ProductTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: this.decreaseProductQuantity(
          action.product_id,
          state.products
        ),
      };
    default:
      return state;
  }
};

addProductCart = (product_id, product_list) => {
  return product_list.map((product) => {
    if (product.id === product_id) {
      return {
        ...product,
        cart: true,
        quantity: 1,
        subtotal: parseInt(product.precio),
      };
    } else return product;
  });
};
removeProductCart = (product_id, product_list) => {
  return product_list.map((product) => {
    if (product.id === product_id) {
      return {
        ...product,
        cart: false,
        quantity: 0,
        subtotal: 0,
      };
    } else return product;
  });
};
addProductQuantity = (product_id, product_list) => {
  return product_list.map((product) => {
    if (product.id === product_id) {
      let quantity = product.quantity + 1;
      return {
        ...product,
        quantity: quantity,
        subtotal: quantity * product.precio,
      };
    } else return product;
  });
};
decreaseProductQuantity = (product_id, product_list) => {
  return product_list.map((product) => {
    if (product.id === product_id) {
      let quantity = product.quantity - 1 < 1 ? 1 : product.quantity - 1;
      return {
        ...product,
        quantity: quantity,
        subtotal: quantity * product.precio,
      };
    } else return product;
  });
};

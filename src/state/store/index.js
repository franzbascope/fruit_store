import { createStore } from "redux";
import { ProductsReducer } from "../reducers/products";
export const store = createStore(ProductsReducer);

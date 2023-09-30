import { ADD_PRODUCT } from "./actionTypes";
import { DELETE_PRODUCT } from "./actionTypes";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (index) => ({
  type: DELETE_PRODUCT,
  payload: index,
});

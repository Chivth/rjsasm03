import { createSlice } from "@reduxjs/toolkit";

const savedata =
  localStorage.getItem("UPDATE_CART") !== null
    ? JSON.parse(localStorage.getItem("UPDATE_CART"))
    : [];

const initialState = {
  cart: savedata,
  quantity: 1,
};

const listCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_CART: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );

      if (find >= 0) {
        state.cart[find].quantity += 1;
        localStorage.setItem("UPDATE_CART", JSON.stringify(state.cart));
      } else {
        const temp = { ...action.payload, quantity: 1 };
        state.cart.push(temp);
        localStorage.setItem("UPDATE_CART", JSON.stringify(state.cart));
      }
    },
    Decrease: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );
      if (state.cart[find].quantity > 1) {
        state.cart[find].quantity -= 1;
        localStorage.setItem("UPDATE_CART", JSON.stringify(state.cart));
      } else {
        state.cart.splice(find, 1);
        localStorage.setItem("UPDATE_CART", JSON.stringify(state.cart));
      }
    },
    Increase: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );
      if (state.cart[find].quantity) {
        state.cart[find].quantity += 1;
        localStorage.setItem("UPDATE_CART", JSON.stringify(state.cart));
      }
    },
    DELETE_CART: (state, action) => {
      const findproduct = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );

      if (findproduct >= 0) {
        state.cart.splice(findproduct, 1);
        localStorage.setItem("UPDATE_CART", JSON.stringify(state.cart));
      }
    },
    UPDATE_CART: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.name === action.payload.name
      ); },
  },
});
export default listCart.reducer;
export const { ADD_CART } = listCart.actions;
export const { UPDATE_CART } = listCart.actions;
export const { DELETE_CART } = listCart.actions;
export const { Decrease } = listCart.actions;
export const { Increase } = listCart.actions;

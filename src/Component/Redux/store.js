import { configureStore } from "@reduxjs/toolkit";
import listCart from "./cart.js";
import reducer_popup from "./reducer";
import use_reducer from "./use_reducer";
import ON_LOGIN from "./onLogin";
import ON_LOGOUT from "./onLogout";


export default configureStore({
  reducer: {
    popups: reducer_popup,
    register: use_reducer,
    onlogin: ON_LOGIN,
    onlogout: ON_LOGOUT,
    cart: listCart,

  },
});

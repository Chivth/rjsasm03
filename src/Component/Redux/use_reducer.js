import { createSlice } from "@reduxjs/toolkit";

export const register = createSlice({
  name: "register",
  initialState: { fullname: "", email: "", password: "", phone: "" },
  reducers: {
    update: (state, action) => {
      state.fullname = action.payload.name;
      state.email = action.payload.mail;
      state.password = action.payload.pass;
      state.phone = action.payload.phones;
    },
  },
});
export const { update } = register.actions;
export default register.reducer;

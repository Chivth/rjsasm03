import { createSlice } from "@reduxjs/toolkit";

export const onLogin = createSlice({
  name: "login",
  initialState: { ON_LOGIN: false },
  reducers: {
    update: (state, action) => {
      state.ON_LOGIN = action.payload.successlogin;
    },
  },
});

export const { update } = onLogin.actions;
export default onLogin.reducer;

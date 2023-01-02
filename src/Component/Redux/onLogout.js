import { createSlice } from "@reduxjs/toolkit";

export const onLogout = createSlice({
  name: "logout",
  initialState: { ON_LOGOUT: false },
  reducers: {
    update: (state, action) => {
      state.ON_LOGOUT = action.payload.successlogout;
    },
  },
});

export const { update } = onLogout.actions;
export default onLogout.reducer;

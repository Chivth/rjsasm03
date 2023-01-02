import { createSlice } from "@reduxjs/toolkit";

export const popup = createSlice({
  name: "showhide",
  initialState: { SHOW_POPUP: false, HIDE_POPUP: true },
  reducers: {
    update: (state, action) => {
      state.SHOW_POPUP = action.payload.show;
      state.HIDE_POPUP = action.payload.hide;
    },
  },
});


export const { update } = popup.actions;
export default popup.reducer;
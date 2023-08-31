import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  xTurn: true,
};

const xSlice = createSlice({
  name: "xSlice",
  initialState,
  reducers: {
    xTurn(state) {
      state.xTurn = true;
    },
    OTurn(state) {
      state.xTurn = false;
    },
  },
});

export const xActions = xSlice.actions;

export default xSlice;

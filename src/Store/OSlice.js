import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oTurn: false,
};

const oSlice = createSlice({
  name: "oSlice",
  initialState,
  reducers: {
    xTurn(state) {
      state.oTurn = false;
    },
    OTurn(state) {
      state.oTurn = true;
    },
  },
});

export const oActions = oSlice.actions;

export default oSlice;

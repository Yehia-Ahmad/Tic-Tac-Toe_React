import { configureStore } from "@reduxjs/toolkit";
import xSlice from "./XSlice";
import oSlice from "./OSlice";

const store = configureStore({
  reducer: {
    XSlice: xSlice.reducer,
    OSlice: oSlice.reducer,
  },
});

export default store;

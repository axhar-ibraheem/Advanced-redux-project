import { configureStore } from "@reduxjs/toolkit";
import CartRreducer from "./CartRreducer";
import uiSlice from "./ui-slice";
const store = configureStore({
  reducer: {
    cart: CartRreducer,
    ui: uiSlice,
  },
});

export default store;

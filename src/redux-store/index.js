import { configureStore } from "@reduxjs/toolkit";
import CartRreducer from "./CartRreducer";
const store = configureStore({
  reducer: {
    cart: CartRreducer,
  },
});

export default store;

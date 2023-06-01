import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "./ui-slice";
import axios from "axios";
const initialCartState = {
  cartProducts: [],
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart: (state, action) => {
      state.cartProducts = action.payload;
    },

    addToCart: (state, action) => {
      const { cartItem } = action.payload;
      state.changed = true;
      const isPresent = state.cartProducts.some(
        (item) => item.id === cartItem.id
      );

      if (isPresent) {
        const item = state.cartProducts.find((item) => item.id === cartItem.id);
        item.quantity++;
      } else {
        state.cartProducts.push(cartItem);
      }
    },

    increment: (state, action) => {
      state.changed = true;
      const { id } = action.payload;
      const cartItem = state.cartProducts.find((item) => item.id === id);
      cartItem.quantity++;
    },

    removeFromCart: (state, action) => {
      state.changed = true;
      const { id } = action.payload;
      const cartItem = state.cartProducts.find((item) => item.id === id);
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== cartItem.id
        );
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    try {
      dispatch(
        showNotification({
          status: "pending,",
          title: "sending...",
          message: "sending cart data",
        })
      );

      const response = await axios.put(
        "https://react-http-4a6c0-default-rtdb.firebaseio.com/cart.json",
        cart
      );
      if (response.status === 200) {
        dispatch(
          showNotification({
            status: "success",
            title: "Success!",
            message: "sent cart data successfully",
          })
        );
      }
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const getData = () => {
  return async (dispatch) => {
    try {
      dispatch(
        showNotification({
          status: "pending",
          title: "Receiving...",
          message: "Receiving cart data",
        })
      );
      const response = await axios.get(
        "https://react-http-4a6c0-default-rtdb.firebaseio.com/cart.json"
      );
      const data = response.data;
      if (response.status === 200) {
        dispatch(
          showNotification({
            status: "success",
            title: "Success",
            message: "Received cart data successfully",
          })
        );

        dispatch(replaceCart(data));
      }
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Receiving cart data failed",
        })
      );
    }
  };
};

export const { addToCart, removeFromCart, increment, replaceCart } =
  cartSlice.actions;
export default cartSlice.reducer;

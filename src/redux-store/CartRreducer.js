import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  show: false,
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart: (state) => {
      state.show = !state.show;
    },

    addToCart: (state, action) => {
      const { cartItem } = action.payload;
      const isPresent = state.cartProducts.some(
        (item) => item.id === cartItem.id
      );

      if (isPresent) {
        state.cartProducts = state.cartProducts.map((item) => {
          if (item.id === cartItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        state.cartProducts.push(cartItem);
      }
    },

    increment: (state, action) => {
      const { id } = action.payload;
      state.cartProducts = state.cartProducts.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    },

    removeFromCart: (state, action) => {
      const { cartItem } = action.payload;

      if (cartItem.quantity > 1) {
        state.cartProducts = state.cartProducts.map((item) => {
          if (item.id === cartItem.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      } else {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== cartItem.id
        );
      }
    },
  },
});

export const { showCart, addToCart, removeFromCart, increment } =
  cartSlice.actions;
export default cartSlice.reducer;

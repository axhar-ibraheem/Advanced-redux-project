import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartProducts: [],
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
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
      state.changed = true;
    },

    increment: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.cartProducts.find((item) => item.id === id);
      cartItem.quantity++;
    },

    removeFromCart: (state, action) => {
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

export const { addToCart, removeFromCart, increment } = cartSlice.actions;
export default cartSlice.reducer;

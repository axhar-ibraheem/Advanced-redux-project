import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  show: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showCart: (state) => {
      state.show = !state.show;
    },
    showNotification: (state, action) => {
      const { status, message, title } = action.payload;
      state.notification = {
        status: status,
        message: message,
        title: title,
      };
    },
  },
});

export default uiSlice.reducer;
export const { showCart, showNotification } = uiSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import { headphonesSlice } from "./headphones";
import { cartSlice } from "./ui/cart";

export const store = configureStore({
  reducer: {
    [headphonesSlice.name]: headphonesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});

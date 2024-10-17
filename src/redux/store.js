import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./ui/cart";
import { headphonesSlice } from "./entities/headphones";
import { reviewsSlice } from "./entities/reviews";
import { usersSlice } from "./entities/users";
import { codecsSlice } from "./entities/codecs";
import { requestsSlice } from "./ui/request";
import { apiSlice } from "./services/api/api";

export const store = configureStore({
  reducer: {
    [headphonesSlice.name]: headphonesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [codecsSlice.name]: codecsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestsSlice.name]: requestsSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

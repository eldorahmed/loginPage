import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./features/userSlice";
import productsReducer from "./features/productSlice";

export const store = configureStore({
  reducer: {
    user: userReduser,
    products: productsReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import productReducer from "../features/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
  composeWithDevTools,
});

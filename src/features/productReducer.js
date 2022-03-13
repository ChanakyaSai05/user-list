import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    deleteProduct: (state, action) => {
      let newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    },
    emptyProduct: () => {
      return [];
    },
  },
});
export const { addProduct, deleteProduct, emptyProduct } =
  productReducer.actions;
export const selectProduct = (state) => state.product;
export default productReducer.reducer;

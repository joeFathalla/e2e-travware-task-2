import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "@/lib/data";

const initialState = {
  products: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getAllProducts(state, action) {
      state.products = [...PRODUCTS];
    },
  },
});

export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;

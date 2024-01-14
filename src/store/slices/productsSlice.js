import { createSlice } from "@reduxjs/toolkit";
import DUMMY_DATA from "@/lib/data";

const ALL_PRODUCTS = DUMMY_DATA.products;

const initialState = {
  products: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = [...ALL_PRODUCTS];
    },
  },
});

export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;

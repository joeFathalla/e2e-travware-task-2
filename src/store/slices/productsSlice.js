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
      const { searchValue } = action.payload;
      const allProducts = [...ALL_PRODUCTS];
      // filter by search
      const filteredProducts = allProducts.filter((product) =>
        product.name.includes(searchValue)
      );
      state.products = [...filteredProducts];
    },
  },
});

export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;

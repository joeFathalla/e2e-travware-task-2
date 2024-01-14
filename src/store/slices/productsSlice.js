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
      const { searchByName, sortBy, sortOrder } = action.payload;
      const allProducts = [...ALL_PRODUCTS];
      // search
      const searchProducts = allProducts.filter((product) =>
        product.name.includes(searchByName)
      );
      // sorting by (name, price, id) sorting order (desc or asc)
      let sortedProducts = [];
      if (sortOrder === "desc") {
        sortedProducts = searchProducts.sort((a, b) => b[sortBy] - a[sortBy]);
      } else {
        sortedProducts = searchProducts.sort((a, b) => a[sortBy] - b[sortBy]);
      }
      state.products = [...sortedProducts];
    },
  },
});

export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import DUMMY_DATA from "@/lib/data";

const ALL_PRODUCTS = DUMMY_DATA.products;

const initialState = {
  products: null,
  cart: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getAllProducts: (state, action) => {
      const { searchByName, sortBy, sortOrder, priceRange } = action.payload;
      const allProducts = [...ALL_PRODUCTS];
      // search
      const searchProducts = allProducts.filter((product) =>
        product.name.includes(searchByName)
      );
      // sorting by (id (default),name, price,)
      let sortedProducts = [];
      if (sortBy === "name") {
        sortedProducts = searchProducts.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else {
        sortedProducts = searchProducts.sort((a, b) => a.price - b.price);
      }
      let filteredProducts = sortedProducts.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );

      state.products = [...filteredProducts];
    },
    addProduct: (state, action) => {
      const { product } = action.payload;
      const cart = [...state.cart];
      const cartIndex = cart.findIndex((cart) => cart.id === product.id);
      if (cartIndex === -1) {
        cart.push({ ...product, quantity: 1 });
      } else {
        cart[cartIndex].quantity++;
      }
      state.cart = [...cart];
    },
    removeProduct: (state, action) => {
      const { cartId } = action.payload;
      const cart = [...state.cart];
      const cartIndex = cart.findIndex((cart) => cart.id === cartId);
      if (cart[cartIndex].quantity === 1) {
        cart.splice(cartIndex, 1);
      } else {
        cart[cartIndex].quantity--;
      }
      state.cart = [...cart];
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { getAllProducts, addProduct, removeProduct, clearCart } =
  productsSlice.actions;
export default productsSlice.reducer;

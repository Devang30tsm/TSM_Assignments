import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("cartProducts")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existing = state.products.find((p) => p.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((item) => item.id !== id);
    },
    updateProduct: (state, action) => {
      const { id, quantity } = action.payload;
      const Updated_Product = state.products.find((item) => item.id === id);
      if (Updated_Product && quantity > 0) {
        Updated_Product.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, updateProduct, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

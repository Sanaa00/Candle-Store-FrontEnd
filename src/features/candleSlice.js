import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data";
const candleSlice = createSlice({
  name: "Candle",
  initialState: {
    candle: [],
    fav: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.candle.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.candle.push({ ...action.payload, quantity: 1 });
      }
    },
    addToFav: (state, action) => {
      const itemInFav = state.fav.find((item) => item.id === action.payload.id);
      if (itemInFav) {
        itemInFav.fav = !itemInFav.fav;
      } else {
        state.fav.push({ ...action.payload, fav: true });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.candle.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.candle.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.candle.filter(
        (item) => item.id !== action.payload
      );
      state.candle = removeItem;
    },
  },
});
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  addToFav,
} = candleSlice.actions;
export default candleSlice.reducer;

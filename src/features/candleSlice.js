import { createSlice } from "@reduxjs/toolkit";
// import Data from "../Data";
const candleSlice = createSlice({
  name: "Candle",
  initialState: {
    candle: [],
    // fav: [],
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
    // addToFav: (state, action) => {
    // const itemInfav = state.fav.find((item) => item.id === action.payload.id);
    // if (!itemInfav) {
    //   state.fav.push({ ...action.payload, fav: true });
    // }else{
    //   state.fav.fav ===false
    // }
    // },
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
    // removeFav: (state, action) => {
    //   const removeItem = state.fav.filter((item) => item.id !== action.payload);
    //   state.fav = removeItem;
    // },
  },
});
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  // addToFav,
  // removeFav,
} = candleSlice.actions;
export default candleSlice.reducer;
// const itemInFav = state.fav.find((item) => item.id === action.payload.id);
// if (itemInFav) {
//   state.fav.fav = false;
// if (state.fav.fav === false) {
// state.fav = state.fav.filter((item) => item.id !== action.payload);
// }
// itemInFav.quantity++;
//  const removeItemFav = state.fav.filter(
//    (item) => item.id !== action.payload
//  );
//  state.fav = removeItemFav;
// } else {
//   state.fav.push({ ...action.payload, fav: true });
// }

import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: [],
  reducers: {
    addtoFav: (state, action) => {
      const itemsToAdd = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      return [...state, ...itemsToAdd];
      // const itemInFav = state.fav.find((item) => item.id === action.payload.id);
      // if (itemInFav) {
      //   itemInFav.fav = false;
      // } else {
      //   state.fav.push({ ...action.payload, fav: true });
      // }
    },
    removeItemFav: (state, action) => {
      return state.filter((item) => item._id !== action.payload._id);
      // const removeItem = state.fav.filter((item) => item.fav !== true);
      // state.fav = removeItem;
    },
  },
});
export const { addtoFav, removeItemFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;

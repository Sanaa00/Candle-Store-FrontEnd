import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {},
  reducers: {
    addtoFav: (state, action) => {
      const itemsToAdd = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      return [...state, ...itemsToAdd];
    },
    removeItemFav: (state, action) => {
      return state.filter((item) => item._id !== action.payload._id);
    },
  },
});
export const { addtoFav, removeItemFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;

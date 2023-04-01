import { createSlice } from "@reduxjs/toolkit";
import data from "../Data";
export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: { fav: [] },
  reducers: {
    addtoFav: (state, action) => {
      const itemInFav = state.fav.find((item) => item.id === action.payload.id);
      if (itemInFav) {
        itemInFav.fav = false;
      } else {
        state.fav.push({ ...action.payload, fav: true });
      }
    },
    removeItemFav: (state, action) => {
      const removeItem = state.fav.filter((item) => item.fav !== true);
      state.fav = removeItem;
    },
  },
});
export const { addtoFav, removeItemFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;

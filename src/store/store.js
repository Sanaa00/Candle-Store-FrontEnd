import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/api";
import candleReducer from "../features/candleSlice";
import favouriteReducer from "../features/favouriteSlice";
import userSlice from "../features/user.slice";
export const store = configureStore({
  reducer: {
    candle: candleReducer,
    favourite: favouriteReducer,
    user: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

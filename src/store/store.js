import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/api";
import candleReducer from "../features/candleSlice";
import favouriteReducer from "../features/favouriteSlice";
export const store = configureStore({
  reducer: {
    candle: candleReducer,
    favourite: favouriteReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

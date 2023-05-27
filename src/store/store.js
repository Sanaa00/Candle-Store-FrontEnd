import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/api";
import candleReducer from "../features/candleSlice";
import userReducer from "../features/user.slice";
export const store = configureStore({
  reducer: {
    candle: candleReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;

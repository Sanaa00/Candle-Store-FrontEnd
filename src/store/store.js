import { configureStore } from "@reduxjs/toolkit";
import candleReducer from "../features/candleSlice";
export const store = configureStore({
  reducer: {
    candle: candleReducer,
  },
});

export default store;

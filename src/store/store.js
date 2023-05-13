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
  preloadedState: loadStateFromLocalStorage(),
});
function loadStateFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("favoriteList");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});
// Save state to local storage
function saveStateToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favoriteList", serializedState);
  } catch (err) {
    console.log(err);
  }
}

export default store;

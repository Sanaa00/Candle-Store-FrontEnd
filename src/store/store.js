import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/api";
import candleReducer from "../features/candleSlice";
// import favouriteReducer from "../features/favouriteSlice";
import userReducer from "../features/user.slice";
export const store = configureStore({
  reducer: {
    candle: candleReducer,
    // favourite: favouriteReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// const rootReducer = combineReducers({
//   candle: candleReducer,
//   favourite: favouriteReducer,
//   user: userSlice.reducer,
//   [apiSlice.reducerPath]: apiSlice.reducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["favourite"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     candle: candleReducer,
//     user: userReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),

// preloadedState: loadStateFromLocalStorage(),
// });

// store.subscribe(() => {
//   saveStateToLocalStorage(store.getState());
// });

// function loadStateFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem("favoriteList");
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// }

// function saveStateToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state?.favourite);
//     localStorage.setItem("favoriteList", serializedState);
//   } catch (err) {
//     console.log(err);
//   }
// }

// export const persistor = persistStore(store);

// export default store;

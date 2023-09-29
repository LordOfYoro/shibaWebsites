import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/themeSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { store, persistedStore };

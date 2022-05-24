import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from "./categories/categoriesSlice";
import { transactionsReducer } from "./transactions/transactionsReducer";
import { isLoadingReducer as isLoading } from "./loader/isLoadingReducer";
import authReducer from "./auth/authSlice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["idToken", "localId"],
};

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    categories,
    isLoading,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

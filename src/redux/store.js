import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import { transactionsReducer } from "./transactions/transactionsReducer";
import { isLoadingReducer as isLoading } from "./loader/isLoadingReducer";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    categories,
    isLoading,
    auth: authReducer,
  },
});

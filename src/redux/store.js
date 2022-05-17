import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import { transactionsReducer } from "./transactions/transactionsReducer";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    categories,
  },
});

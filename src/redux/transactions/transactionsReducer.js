import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addCosts,
  addIncomes,
  getCosts,
  getIncomes,
  removeCosts,
  removeIncomes,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [getCosts]: (_, { payload }) => payload,
  [addCosts]: (state, { payload }) => [...state, payload],
  [removeCosts]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const incomesReducer = createReducer([], {
  [getIncomes]: (_, { payload }) => payload,
  [addIncomes]: (state, { payload }) => [...state, payload],
  [removeIncomes]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addCostsSuccess,
  addIncomesSuccess,
  getCostsSuccess,
  getIncomesSuccess,
  removeCostsSuccess,
  removeIncomesSuccess,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [getCostsSuccess]: (_, { payload }) => payload,
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
  [removeCostsSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const incomesReducer = createReducer([], {
  [getIncomesSuccess]: (_, { payload }) => payload,
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
  [removeIncomesSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

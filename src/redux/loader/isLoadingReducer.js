import { createReducer } from "@reduxjs/toolkit";
import {
  addCostsError,
  addCostsRequest,
  addCostsSuccess,
  addIncomesError,
  addIncomesRequest,
  addIncomesSuccess,
  getCostsError,
  getCostsRequest,
  getCostsSuccess,
  getIncomesError,
  getIncomesRequest,
  getIncomesSuccess,
  removeCostsError,
  removeCostsRequest,
  removeCostsSuccess,
  removeIncomesError,
  removeIncomesRequest,
  removeIncomesSuccess,
} from "../transactions/transactionsActions";

export const isLoadingReducer = createReducer(false, {
  [getCostsRequest]: () => true,
  [getCostsSuccess]: () => false,
  [getCostsError]: () => false,

  [getIncomesRequest]: () => true,
  [getIncomesSuccess]: () => false,
  [getIncomesError]: () => false,

  [addCostsRequest]: () => true,
  [addCostsSuccess]: () => false,
  [addCostsError]: () => false,

  [addIncomesRequest]: () => true,
  [addIncomesSuccess]: () => false,
  [addIncomesError]: () => false,

  [removeCostsRequest]: () => true,
  [removeCostsSuccess]: () => false,
  [removeCostsError]: () => false,

  [removeIncomesRequest]: () => true,
  [removeIncomesSuccess]: () => false,
  [removeIncomesError]: () => false,
});

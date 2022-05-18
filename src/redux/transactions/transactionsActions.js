import { createAction } from "@reduxjs/toolkit";

export const removeCosts = createAction("transactions/removeCosts");

export const removeIncomes = createAction("transactions/removeIncomes");

export const getCostsRequest = createAction("transactions/getCostsRequest");
export const getCostsSuccess = createAction("transactions/getCostsSuccess");
export const getCostsError = createAction("transactions/getCostsError");

export const getIncomesRequest = createAction("transactions/getIncomesRequest");
export const getIncomesSuccess = createAction("transactions/getIncomesSuccess");
export const getIncomesError = createAction("transactions/getIncomesError");

export const addCostsRequest = createAction("transactions/addCostsRequest");
export const addCostsSuccess = createAction("transactions/addCostsSuccess");
export const addCostsError = createAction("transactions/addCostsError");

export const addIncomesRequest = createAction("transactions/addIncomesRequest");
export const addIncomesSuccess = createAction("transactions/addIncomesSuccess");
export const addIncomesError = createAction("transactions/addIncomesError");

export const removeCostsRequest = createAction(
  "transactions/removeCostsRequest"
);
export const removeCostsSuccess = createAction(
  "transactions/removeCostsSuccess"
);
export const removeCostsError = createAction("transactions/removeCostsError");

export const removeIncomesRequest = createAction(
  "transactions/removeIncomesRequest"
);
export const removeIncomesSuccess = createAction(
  "transactions/removeIncomesSuccess"
);
export const removeIncomesError = createAction(
  "transactions/removeIncomesError"
);

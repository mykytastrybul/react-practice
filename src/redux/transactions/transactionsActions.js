import { createAction } from "@reduxjs/toolkit";

export const getCosts = createAction("transactions/getCosts");
export const addCosts = createAction("transactions/addCosts");
export const removeCosts = createAction("transactions/removeCosts");

export const getIncomes = createAction("transactions/getIncomes");
export const addIncomes = createAction("transactions/addIncomes");
export const removeIncomes = createAction("transactions/removeIncomes");

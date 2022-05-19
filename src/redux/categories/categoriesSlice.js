import { createSlice } from "@reduxjs/toolkit";
import {
  addCostsCategory,
  addIncomesCategory,
  getCostsCategories,
  getIncomesCategories,
} from "./categoriesOperations";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    costsCats: [],
    incomesCats: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getCostsCats(state, { payload }) {
      return { ...state, costsCats: payload };
    },
    getIncomesCats(state, { payload }) {
      state.incomesCats = payload;
    },
    addCostsCats(state, { payload }) {
      return { ...state, costsCats: [...state.costsCats, payload] };
    },
    addIncomesCats(state, { payload }) {
      state.incomesCats.push(payload);
    },
  },
  extraReducers: {
    [getCostsCategories.pending]: (state) => {
      state.isLoading = true;
    },

    [getCostsCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.costsCats = payload;
    },

    [getCostsCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [getIncomesCategories.pending]: (state) => {
      state.isLoading = true;
    },

    [getIncomesCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.incomesCats = payload;
    },

    [getIncomesCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addCostsCategory.pending]: (state) => {
      state.isLoading = true;
    },

    [addCostsCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.costsCats.push(payload);
    },

    [addCostsCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addIncomesCategory.pending]: (state) => {
      state.isLoading = true;
    },

    [addIncomesCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.incomesCats.push(payload);
    },

    [addIncomesCategory.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default categoriesSlice.reducer;

export const { getCostsCats, addIncomesCats, addCostsCats, getIncomesCats } =
  categoriesSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    costsCats: [],
    incomesCats: [],
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
});

export default categoriesSlice.reducer;

export const { getCostsCats, addIncomesCats, addCostsCats, getIncomesCats } =
  categoriesSlice.actions;

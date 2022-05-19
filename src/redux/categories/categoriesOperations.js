import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesApi, addCategoryApi } from "../../utils/apiService";

export const getCostsCategories = createAsyncThunk(
  "categories/getCosts",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await getCategoriesApi({ transType: "costs" });
      return categories;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getIncomesCategories = createAsyncThunk(
  "categories/getIncomes",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await getCategoriesApi({ transType: "incomes" });
      return categories;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addCostsCategory = createAsyncThunk(
  "categories/addCosts",
  async (category, { rejectWithValue }) => {
    try {
      const categories = await addCategoryApi({ transType: "costs", category });
      return categories;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addIncomesCategory = createAsyncThunk(
  "categories/addIncomes",
  async (category, { rejectWithValue }) => {
    try {
      const categories = await addCategoryApi({
        transType: "incomes",
        category,
      });
      return categories;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

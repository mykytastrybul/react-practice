import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi, registerUserApi } from "../../utils/apiService";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await registerUserApi({ email, password });
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await loginUserApi({ email, password });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

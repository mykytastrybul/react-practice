import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi } from "../../utils/apiService";

export const registerUser = createAsyncThunk(
  "auth,registerUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await registerUserApi({ email, password });
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

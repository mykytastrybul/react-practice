import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    idToken: null,
    localId: null,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled](state, action) {
      state.isLoading = false;
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
      state.localId = action.payload.localId;
    },
    [registerUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;

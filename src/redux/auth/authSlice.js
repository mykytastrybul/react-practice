import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    idToken: null,
    localId: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logOut(state) {
      state.email = "";
      state.idToken = null;
      state.localId = null;
      state.isLoading = false;
      state.error = null;
    },
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
    [loginUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled](state, action) {
      state.isLoading = false;
      state.email = action.payload.email;
      state.idToken = action.payload.idToken;
      state.localId = action.payload.localId;
    },
    [loginUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { logOut } = authSlice.actions;

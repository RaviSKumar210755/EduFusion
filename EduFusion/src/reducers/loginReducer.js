import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("UserData")) || null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
      console.log("IN loginRequest");
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("UserData", JSON.stringify(action.payload));
      console.log("IN loginSuccess", state.user);
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      console.log("IN loginFailure", state.error);
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;

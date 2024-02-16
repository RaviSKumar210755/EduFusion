import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signupRequest(state) {
      state.loading = true;
      state.error = null;
      console.log("IN signupRequest");
    },
    signupSuccess(state, action) {
      state.loading = false;
      //   state.user = action.payload;
      //   localStorage.setItem("UserData", JSON.stringify(action.payload));
      console.log("IN signupSuccess", action.payload);
    },
    signupFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      console.log("IN signupFailure", state.error);
    },
  },
});

export const { signupRequest, signupSuccess, signupFailure } =
  signupSlice.actions;
export default signupSlice.reducer;

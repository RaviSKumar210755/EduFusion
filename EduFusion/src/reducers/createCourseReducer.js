import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: JSON.parse(localStorage.getItem("course")) || null,
  loading: false,
  error: null,
};

const CreateNewCourseSlice = createSlice({
  name: "create-new-course",
  initialState,
  reducers: {
    newCourseRequest(state) {
      state.loading = true;
      state.error = null;
      console.log("IN loginRequest");
    },
    newCourseSuccess(state, action) {
      state.loading = false;
      state.course = { ...state.course, ...action.payload };
    },
    newCourseFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      console.log("IN loginFailure", state.error);
    },
  },
});

export const { newCourseRequest, newCourseSuccess, newCourseFailure } =
  CreateNewCourseSlice.actions;
export default CreateNewCourseSlice.reducer;

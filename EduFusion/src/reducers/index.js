// reducers.js
import { combineReducers } from "redux";
import loginReducer from "../reducers/loginReducer";
import signupSlice from "../reducers/signupReducer";
import CreateNewCourseSlice from "../reducers/createCourseReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupSlice,
  createCourse: CreateNewCourseSlice,
});

export default rootReducer;

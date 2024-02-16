import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CourseDetails from "./Pages/CourseDetails";
import Profile from "./Pages/Profile";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreateNewCourse from "./Pages/CreateNewCourse";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { newCourseSuccess } from "./reducers/createCourseReducer";
function App() {
  // const userData = localStorage.getItem("UserData");
  // const Course = localStorage.getItem("course");
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (userData) {
  //     const user = JSON.parse(userData);
  //     const data = JSON.parse(Course);
  //     console.log(user);
  //     console.log(data);
  //   }
  // }, [dispatch]);

  const respons = async () => {
    const response = await axios.get("http://localhost:3000/getCourse");
    if (response.status === 200) {
      localStorage.setItem("course", JSON.stringify(response.data));
      console.log(response.data);
    }
  };

  useEffect(() => {
    respons();
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="course-details/:id" element={<CourseDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Addcourse" element={<CreateNewCourse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

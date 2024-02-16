import React from "react";
import { Link } from "react-router-dom";
// import Course from "./CourseData";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div id="close-btn">
        <i className="fas fa-times"></i>
      </div>

      <div className="profile">
        <img src="images/pic-1.jpg" className="image" alt="" />
        <h3 className="name">Shaikh Anas</h3>
        <p className="role">Student</p>
        <Link to="/profile" className="btn">
          View Profile
        </Link>
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/sign-up" className="btn">
          Register
        </Link>

        <Link to="/Addcourse" className="btn">
          Create New Course
        </Link>
      </div>

      <nav className="navbar">
        {/* <a href="home.html">
          <i className="fas fa-home"></i>
          <span>Create Course</span>
        </a> */}
        {/* <a href="about.html">
          <i className="fas fa-question"></i>
          <span>About</span>
        </a>
        <a href="courses.html">
          <i className="fas fa-graduation-cap"></i>
          <span>Courses</span>
        </a> */}
        <input
          type="text"
          name="query"
          placeholder="Enter Course Name"
          className="search-input"
        />
        <hr />
        <input
          type="text"
          name="query"
          placeholder="Enter Instructor Name"
          className="search-input"
        />
        <hr />
      </nav>
    </div>
  );
};

export default Sidebar;

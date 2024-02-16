import React from "react";
import { Link } from "react-router-dom";

const CourseBox = ({ id, tutorName, date, courseImg, courseTitle }) => {
  return (
    <div className="box">
      <div className="tutor">
        <div className="info">
          <h3>{tutorName}</h3>
          <span>{date}</span>
        </div>
      </div>
      <div className="thumb">
        <img src={courseImg} alt={courseTitle} />
      </div>
      <h3 className="title">{courseTitle}</h3>
      <Link to={`/course-details/${id}`} className="inline-btn">
        View Details
      </Link>
    </div>
  );
};

export default CourseBox;

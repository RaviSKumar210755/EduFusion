import React from "react";
import CourseBox from "./CouresBox"; // Import CourseBox component

const Courses = () => {
  const courses = JSON.parse(localStorage.getItem("course"));
  console.log(courses);
  return (
    <div>
      <section className="courses">
        <h1 className="heading">Our Courses</h1>
        <div className="box-container">
          {courses?.map((data) => (
            <CourseBox
              key={data._id}
              tutorName={data.instructor}
              courseImg={data.img}
              date={data.updatedAt}
              courseTitle={data.title}
              id={data._id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;

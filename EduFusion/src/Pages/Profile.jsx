import React from "react";
// import Courses from "../Components/Courses";

const Profile = () => {
  const UserData = JSON.parse(localStorage.getItem("UserData"));
  const CourseList = JSON.parse(localStorage.getItem("course"));
  const StudentEnrolled = UserData.user.courses;
  let courses = [];
  console.log(StudentEnrolled);
  const Position = UserData.user.SecretCode == "1" ? "Instructor" : "Student";

  return (
    <div>
      <section className="user-profile">
        <h1 className="heading">Your Profile</h1>
        <div className="info">
          <div className="user">
            <img src="images/pic-1.jpg" alt="Profile" />
            <h3>Shaikh Anas</h3>
            <p>{Position}</p>
          </div>
        </div>
      </section>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Profile;

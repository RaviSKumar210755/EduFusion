import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PlaylistDetails = () => {
  const { id } = useParams();
  const courseList = JSON.parse(localStorage.getItem("course"));
  const User = JSON.parse(localStorage.getItem("UserData"));
  console.log(id);
  const Userid = User.acess_token;
  console.log(Userid);
  const course = courseList.find((course) => course._id === id);
  console.log(course);
  if (!course) {
    return <div>Course not found</div>;
  }

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/${id}/addCourse`,
        {
          headers: {
            Authorization: `Bearer ${Userid}`,
          },
        }
      );
      if (response.status === 200) {
        window.location.reload();
        console.log("Course added successfully", response.data.user.Name);
      } else {
        console.log("Course not found");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="playlist-details">
        <h1 className="heading">Course details</h1>
        <div className="row">
          <div className="column">
            <form action="" method="post" className="save-playlist">
              <button type="submit">
                <i className="far fa-bookmark"></i> <span>{course.status}</span>
              </button>
            </form>
            <div className="thumb">
              <img src={course.img} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="tutor">
              <div>
                <h3>{course.instructor}</h3>
                <span>{course.updatedAt}</span>
              </div>
            </div>
            <div className="details">
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <a onClick={() => handleClick()} className="inline-btn">
                Add
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="table-container">
        <table>
          <tbody>
            <tr>
              <th>Duration</th>
              <td>{course.duration}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{course.location}</td>
            </tr>
            <tr>
              <th>Prerequisites</th>
              <td>{course.prerequisites}</td>
            </tr>
            <tr>
              <th>Syllabus</th>
              <td>
                <ul>
                  {course.syllabus.map((weekData, index) => (
                    <li key={index}>
                      Week {index + 1}: {weekData}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th>Enrolled Students</th>
              <td>
                <ul>
                  {course.students?.map((weekData, index) => (
                    <li key={index}>{weekData.name}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlaylistDetails;

import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../Firebase/FirabaseAuth";
import {
  newCourseRequest,
  newCourseSuccess,
  newCourseFailure,
} from "../reducers/createCourseReducer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const CreateNewCourse = () => {
  const userData = localStorage.getItem("UserData");
  const user = JSON.parse(userData);
  const token = user?.acess_token;
  const dispatch = useDispatch();
  const [numOfWeeks, setNumOfWeeks] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    enrollment_status: "",
    duration: "",
    schedule: "",
    location: "",
    prerequisites: "",
    syllabus: [],
    course_image: null,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      uploadImage(file);
    }
  };

  const uploadImage = (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          setFormData({
            ...formData,
            course_image: downloadURL,
          });
        });
      }
    );
  };

  const handleWeeksChange = (e) => {
    const weeks = parseInt(e.target.value, 10);
    if (!isNaN(weeks)) {
      setNumOfWeeks(weeks);
    }
  };

  // Function to handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If input is for syllabus weeks, update syllabus array
    if (name.startsWith("week")) {
      const weekIndex = parseInt(name.replace("week", ""), 10) - 1;
      const newSyllabus = [...formData.syllabus];
      newSyllabus[weekIndex] = value;
      setFormData({ ...formData, syllabus: newSyllabus });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(newCourseRequest());
    try {
      const response = await axios.post(
        "http://localhost:3000/createCourse",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) dispatch(newCourseSuccess(response.data));
      else {
        const errorMessage = response.data || "Error in Creating Course";
        dispatch(newCourseFailure(errorMessage));
        throw new Error(errorMessage); // Throw an error
      }
    } catch (error) {
      dispatch(newCourseFailure(error));
    }
  };

  return (
    <div>
      <section className="form-container">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h3>Create New Course</h3>
          <p>
            Upload Image <span>*</span>
          </p>
          <input
            type="file"
            name="course_image"
            accept="image/*"
            required
            className="box"
            onChange={handleFileChange}
          />
          <p>
            Course Name <span>*</span>
          </p>
          <input
            type="text"
            name="name"
            placeholder="Enter Course name"
            required
            maxLength="50"
            className="box"
            onChange={handleChange}
          />
          <p>
            Instructor Name <span>*</span>
          </p>
          <input
            type="text"
            name="email"
            placeholder="Enter Instructor email"
            required
            maxLength="50"
            className="box"
            onChange={handleChange}
          />
          <p>
            Description <span>*</span>
          </p>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            placeholder="Enter Description"
            required
            maxLength="100"
            className="box"
          />
          <p>
            Enrollment Status <span>*</span>
          </p>
          <div>
            <label>
              <input
                type="radio"
                name="enrollment_status"
                value="OPEN"
                required
                onChange={handleChange}
              />
              OPEN
            </label>
            <label>
              <input
                type="radio"
                name="enrollment_status"
                value="CLOSED"
                required
                onChange={handleChange}
              />
              CLOSED
            </label>
          </div>
          <p>
            Duration <span>*</span>
          </p>
          <input
            type="text"
            name="duration"
            onChange={handleChange}
            placeholder="Enter Duration Of Course"
            maxLength="20"
            className="box"
          />
          <p>
            Schedule <span>*</span>
          </p>
          <input
            type="text"
            name="schedule"
            onChange={handleChange}
            placeholder="Enter Schedule"
            maxLength="20"
            className="box"
          />
          <p>
            Location <span>*</span>
          </p>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            placeholder="Enter Location"
            maxLength="50"
            className="box"
          />
          <p>
            Prerequisites <span>*</span>
          </p>
          <input
            type="text"
            name="prerequisites"
            onChange={handleChange}
            placeholder="Enter Prerequisites"
            maxLength="100"
            className="box"
          />
          {/* Other form fields */}
          <p>
            Number of Weeks <span>*</span>
          </p>
          <input
            type="number"
            name="numOfWeeks"
            placeholder="Enter Number of Weeks For Syllbus"
            value={numOfWeeks}
            onChange={handleWeeksChange}
            min={1} // Minimum value allowed
            className="box"
          />
          {/* Dynamically render input fields based on number of weeks */}
          {[...Array(numOfWeeks)].map((_, index) => (
            <div key={index}>
              <p>Week {index + 1}</p>
              <input
                type="text"
                name={`week${index + 1}`}
                placeholder={`Content for Week ${index + 1}`}
                maxLength="100"
                className="box"
                onChange={handleChange}
              />
            </div>
          ))}

          <input
            type="submit"
            value="Create Now"
            name="submit"
            className="btn"
          />
        </form>
      </section>
    </div>
  );
};

export default CreateNewCourse;

import React, { useState } from "react";
import {
  signupRequest,
  signupSuccess,
  signupFailure,
} from "../reducers/signupReducer";
import axios from "axios";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    secretCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(signupRequest());
    try {
      const response = await axios.post(
        "http://localhost:3000/signup",
        formData
      );
      const data = response.data;
      if (response.status === 200) dispatch(signupSuccess(data));
      else {
        const errorMessage = data || "Error in signup request";
        dispatch(signupFailure(errorMessage));
        throw new Error(errorMessage);
      }
    } catch (error) {
      dispatch(signupFailure(error.message || "Error in signup request"));
    }
  };

  return (
    <div>
      <section className="form-container">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h3>Register Now</h3>
          <p>
            Your Name <span>*</span>
          </p>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            maxLength="50"
            className="box"
            value={formData.name}
            onChange={handleChange}
          />
          <p>
            Your Email <span>*</span>
          </p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            maxLength="50"
            className="box"
            value={formData.email}
            onChange={handleChange}
          />
          <p>
            Your Password <span>*</span>
          </p>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            maxLength="20"
            className="box"
            value={formData.password}
            onChange={handleChange}
          />
          <p>Only For Instructor</p>
          <input
            type="password"
            name="secretCode"
            placeholder="Enter Secret Code"
            maxLength="20"
            className="box"
            value={formData.secretCode}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Register Now"
            name="submit"
            className="btn"
          />
        </form>
      </section>
    </div>
  );
};

export default SignUp;

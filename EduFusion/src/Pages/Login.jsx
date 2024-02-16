import React, { useState } from "react";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../reducers/loginReducer";
import { useDispatch } from "react-redux";
import axios from "axios";
const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    dispatch(loginRequest());
    try {
      const response = await axios.post(
        "http://localhost:3000/signin",
        formData
      );
      const data = response.data;
      console.log("Response Data", response);
      if (response.status === 200) dispatch(loginSuccess(data));
      else dispatch(loginFailure(data || "Login failed"));
    } catch (error) {
      dispatch(loginFailure(error.message || "Login failed"));
    }
  };

  return (
    <div>
      <section className="form-container">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h3>Login Now</h3>
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
          <input
            type="submit"
            value="Login Now"
            name="submit"
            className="btn"
          />
        </form>
      </section>
    </div>
  );
};

export default Login;

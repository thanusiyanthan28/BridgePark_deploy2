import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../../css/LoginSignUp.css";
import hotelFront from "../../assets/images/HotelFront.jpg";
import SignUpGoogleBtn from "../common/SignUpGoogleBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ResetPassword from './ResetPassword';
import { Routes } from 'react-router-dom';


const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isGoogleBtnClicked, setIsGoogleBtnClicked] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-eye");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleBtnClick = () => {
    setIsGoogleBtnClicked(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        setSuccessMessage("Logged in successfully");
      } else {
        setErrors({ message: "Invalid email or password" });
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrors({ message: "Invalid email or password" });
    }
  };
  //For the password icon
  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
    setIcon(icon === "fa-eye" ? "fa-eye-slash" : "fa-eye");
  };

  return (
    <body className="signUpIn-body">
      <div className="signUpIn-container">
        <div className="signUpIn-fullRow">
          <div className="signUpIn-Logpicture">
            <img src={hotelFront} alt="LoginIn" />
          </div>
          <div className="signUpIn-header">
            <div className="signUpIn-text">Login</div>
            <p className="signUpIn-Subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="signUpIn-inputs">
              <div className="signUpIn-input">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
                {errors.name && <span className="signUpIn-error">{errors.name}</span>}
              </div>
              <div className="signUpIn-input">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && <span className="signUpIn-error">{errors.email}</span>}
              </div>
              <div className="signUpIn-input">
                <div className="signUpIn-passwordWrapper">
                  <input
                    type={type}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span className="signUpIn-togglePassword" onClick={handleToggle}>
                    <FontAwesomeIcon
                       icon={showPassword ? faEyeSlash : faEye}
                      size="xs"
                      style={{ color: "#669399" }}
                    />
                  </span>
                </div>
                {errors.password && (
                  <span className="signUpIn-error">{errors.password}</span>
                )}
              </div>
              <div className="signUpIn-forgotPassword">
                <Link to="/reset-password">Forgot Password?</Link>
              </div>
              <div className="signUpIn-SubmitContainor">
                <div className="signUpIn-submit" onClick={handleSubmit}>
                  Login
                </div>
                {isGoogleBtnClicked ? (
                  <div className="signUpIn-signUpGoogle" onClick={handleGoogleBtnClick}>
                    <FontAwesomeIcon
                      icon="fa-brands fa-google"
                      size="s"
                      style={{ color: "#669399" }}
                    />
                    Sign up with Google
                  </div>
                ) : (
                  <SignUpGoogleBtn />
                )}
              </div>
              <div className="signUpIn-alreadyAccount">
                Don't have an account?{" "}
                <span>
                  <Link to="/SignUp">Sign up</Link>
                </span>
              </div>
              {successMessage && (
                <div className="signUpIn-successMessage">{successMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignIn;

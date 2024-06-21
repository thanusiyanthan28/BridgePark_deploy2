import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from "react-router-dom";
import style from "../../css/LoginSignUp.css";
import hotelFront from "../../assets/images/HotelFront.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mockResponse = {
      data: {
        success: true,
      },
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (mockResponse.data.success) {
        setSuccessMessage("Logged in successfully");
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setErrors({ message: "Invalid email or password" });
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrors({ message: "Invalid email or password" });
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log(response);
    const token = response.credential; 
    console.log('token', token)
    setSuccessMessage("Logged in with Google successfully");
    setIsLoggedIn(true);
    navigate("/");
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login failed", error);
    setErrors({ message: "Google login failed" });
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
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
              Join Bridge Park Hotel and share your experience to help us
              improve and provide the best services.
            </p>
            <div className="signUpIn-inputs">
              <div className="signUpIn-input">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
                {errors.name && (
                  <span className="signUpIn-error">{errors.name}</span>
                )}
              </div>
              <div className="signUpIn-input">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && (
                  <span className="signUpIn-error">{errors.email}</span>
                )}
              </div>
              <div className="signUpIn-input">
                <div className="signUpIn-passwordWrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span
                    className="signUpIn-togglePassword"
                    onClick={handleToggle}
                  >
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
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleFailure}
                />
              </div>
              <div className="signUpIn-alreadyAccount">
                Don't have an account?{" "}
                <span>
                  <Link to="/SignUp">Sign up</Link>
                </span>
              </div>
              {successMessage && (
                <div className="signUpIn-successMessage">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignIn;

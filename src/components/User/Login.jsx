import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import style from "../../css/LoginSignUp.css";
import hotelFront from "../../assets/images/HotelFront.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    const mockResponse = {
      data: {
        success: true,
      },
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (mockResponse.data.success) {
        toast.success("Login successfully!");
        setIsLoggedIn(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrors({ message: "Invalid email or password" });
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log(response);
    const token = response.credential;
    console.log("token", token);
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
      <ToastContainer />
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
                      icon={showPassword ? faEye : faEyeSlash}
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
                  className="signUpIn-signUpGoogle"
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
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignIn;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import hotelFront from "../../assets/images/HotelFront.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../../css/LoginSignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Strict email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email";
      formIsValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      formIsValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      formIsValid = false;
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
      formIsValid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Password reset successfully!");
      setTimeout(() => {
        navigate("/SignIn");
      }, 3000);
    } else {
      toast.error("Unable to Reset Password.");
    }
  };

  return (
    <div className="signUpIn-body">
      <ToastContainer />
      <div className="signUpIn-container">
        <div className="signUpIn-fullRow">
          <div className="signUpIn-Logpicture">
            <img src={hotelFront} alt="LoginIn" />
          </div>
          <div className="signUpIn-header">
            <div className="signUpIn-text">Reset Your Password</div>
            <p className="signUpIn-Subtext">
              Join Bridge Park Hotel and share your experience to help us
              improve and provide the best services.
            </p>
            <div className="signUpIn-inputs">
              <div className="signUpIn-input">
                <input
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && (
                  <span className="signUpIn-error">{errors.email}</span>
                )}
              </div>
              <div className="signUpIn-input">
                <div className="signUpIn-ResetpasswordWrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password *"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span
                    className="signUpIn-togglePassword"
                    onClick={handleTogglePassword}
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
              <div className="signUpIn-input">
                <div className="signUpIn-ResetpasswordWrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password *"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <span
                    className="signUpIn-togglePassword"
                    onClick={handleToggleConfirmPassword}
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEye : faEyeSlash}
                      size="xs"
                      style={{ color: "#669399" }}
                    />
                  </span>
                </div>
                {errors.confirmPassword && (
                  <span className="signUpIn-error">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <div className="signUpIn-SubmitContainor">
                <button className="signUpIn-submit" onClick={handleSubmit}>
                  Reset Your Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

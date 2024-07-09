import React, { useState } from "react";
import style from "../../css/LoginSignUp.css";
import hotelFront from "../../assets/images/HotelFront.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const ResetPassword = () => {
  // const history = useHistory();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 6) {
      setErrors({
        ...errors,
        password: "Password must be at least 6 characters long",
      });
    } else {
      setErrors({ ...errors, password: "" });
    }
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

  //Function to the valaidate form inputs
  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};
    if (!email.trim()) {
      formIsValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      newErrors.email = "Email is invalid";
    }

    if (!password.trim()) {
      formIsValid = false;
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      formIsValid = false;
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return formIsValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (password === confirmPassword) {
        setSuccessMessage("Password Reset successfully");
        setErrorMessage("");
      } else {
        setErrorMessage("Passwords do not match");
        setSuccessMessage("");
      }
    }
  };

  return (
    <body className="signUpIn-body">
      <div className="signUpIn-container">
        <div className="signUpIn-fullRow">
          <div className="signUpIn-Logpicture">
            <img src={hotelFront} alt="LoginIn" />
          </div>
          <div className="signUpIn-header">
            <div className="signUpIn-text">Reset Your Password</div>
            <p className="signUpIn-Subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="signUpIn-inputs">
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
                <div className="signUpIn-ResetpasswordWrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span
                    className="signUpIn-togglePassword"
                    onClick={handleTogglePassword}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      size="xs"
                      style={{ color: "#669399" }}
                    />
                  </span>
                </div>
              </div>
              <div className="signUpIn-input">
                <div className="signUpIn-ResetpasswordWrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <span
                    className="signUpIn-togglePassword"
                    onClick={handleToggleConfirmPassword}
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEyeSlash : faEye}
                      size="xs"
                      style={{ color: "#669399" }}
                    />
                  </span>
                </div>
              </div>
              <div className="signUpIn-SubmitContainor">
                <div className="signUpIn-submit" onClick={handleSubmit}>
                  Reset Your Password
                </div>
                {errorMessage && (
                  <span className="signUpIn-error">{errorMessage}</span>
                )}
                {successMessage && (
                  <span className="signUpIn-successMessage">
                    {successMessage}
                  </span>
                )}
                {successMessage && ( // Conditionally render the link if successMessage is not empty
                  <span>
                    Go to <Link to="/SignIn">Login</Link>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default ResetPassword;

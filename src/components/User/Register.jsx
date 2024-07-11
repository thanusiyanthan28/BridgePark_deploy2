import React, { useState } from "react";
import { Link } from "react-router-dom";
import hotelFront from "../../assets/images/HotelFront.webp";
import SignUpGoogleBtn from "../common/SignUpGoogleBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {registerApi} from '../../Services/auth'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isGoogleBtnClicked, setIsGoogleBtnClicked] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-eye");
  const [successMessage, setSuccessMessage] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    const formData = {
      name: name,
      email: email,
      password: password
    };
    
    try {
      const response = await registerApi(formData);
      const token = response.passwordHash
      localStorage.setItem('token', token)
      navigate("/signIn");
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleGoogleBtnClick = () => {
    setIsGoogleBtnClicked(true);
  };

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
            <div className="signUpIn-text">Create an account</div>
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="signUpIn-error">{errors.email}</span>
                )}
              </div>
              <div className="signUpIn-input">
                <div className="signUpIn-passwordWrapper">
                  <input
                    type={type}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  Create account
                </div>
                {isGoogleBtnClicked ? (
                  <div
                    className="signUpIn-signUpGoogle"
                    onClick={handleGoogleBtnClick}
                  >
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
                Already have an account?{" "}
                <span>
                  <Link to="/SignIn">Login</Link>
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

export default SignUp;

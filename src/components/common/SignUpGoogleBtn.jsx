import React from "react";

const SignUpGoogleBtn = () => {
  const handleGoogleSignIn = async () => {
    try {
      const response = await fetch("/api/google-signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Google Sign-In failed");
      }

      const data = await response.json();
      console.log("User signed in successfully:", data);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <button className="signUpIn-signUpGoogle" onClick={handleGoogleSignIn}>
      Sign up with Google
    </button>
  );
};

export default SignUpGoogleBtn;
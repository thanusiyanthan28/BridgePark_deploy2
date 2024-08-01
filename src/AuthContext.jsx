import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserData(user);
    }
  }, []);

  const login = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

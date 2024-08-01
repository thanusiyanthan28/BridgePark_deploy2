import React, { useState } from 'react';
import './NewHeader.css';

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        logo
      </div>
      <div className="navbar-menus">
        <a href="#menu1">Menu 1</a>
        <a href="#menu2">Menu 2</a>
        <a href="#menu3">Menu 3</a>
        <a href="#menu4">Menu 4</a>
        <a href="#menu5">Menu 5</a>
      </div>
      <div className="navbar-profile">
        <button className="navbar-button">Button</button>
        <img
          src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png"
          alt="Profile Icon"
          className="profile-icon"
          onClick={toggleDropdown}
        />
        {dropdownVisible && (
          <div className="dropdown-menu">
            {isSignedIn ? (
              <>
                <a href="#profile">Profile</a>
                <a href="#logout" onClick={handleSignOut}>Logout</a>
              </>
            ) : (
              <>
                <a href="#signin">Sign In</a>
                <a href="#signup">Sign Up</a>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

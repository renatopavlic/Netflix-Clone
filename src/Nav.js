import React, { useState,useEffect } from 'react';
import "./Nav.css";

function Nav() {

  const [show, handleShow] = useState(false);

  // Set show navbar 
  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    // Listen to scroll event
    window.addEventListener("scroll", transitionNavBar);

    // Clean up function
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img 
          src="/images/logo.png" 
          alt="logo" 
          className="nav__logo" />
        <img 
          src="/images/user.png" 
          alt="avatar" 
          className="nav__avatar" />
      </div>
    </div>
  )
}

export default Nav;

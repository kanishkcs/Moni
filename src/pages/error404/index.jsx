 
import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import { Link } from "react-router-dom";

const Error404 = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="main-wrapper">
          <div className="error-box">
            <h1>404</h1>
            <h3 className="h2 mb-3">
              <i className="fas fa-exclamation-circle"></i> Oops! Page not found!
            </h3>
            <p className="h4 font-weight-normal">
              The page you requested was not found.
            </p>
            <Link to="/index" class="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;

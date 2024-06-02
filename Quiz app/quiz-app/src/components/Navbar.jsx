import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ reset, clickAboutUs, isHomeView }) => {
  const homeButtonHandler = () => {
    if (isHomeView) alert("😇😇 You are already on home page !!!! ");
    else reset();
  };

  const clickWebsiteNameHandler = () => {
    if (isHomeView) alert("😇😇 You are already on home page !!!! ");
    else reset();
  };

  return (
    <nav className="container-fluid navbar navbar-expand-lg  navbars fixed-top">
      <span
        className="websiteName ms-3 fw-bold mt-0 pt-0"
        onClick={clickWebsiteNameHandler}
      >
        <strong>Q</strong>uiztime
      </span>

      <button
        className="navbar-toggler me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse nav mt-3"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav   justify-content-lg-end justify-content-lg-start w-100">
          <li className="nav-item  text">
            <button
              className="px-2 py-1 mx-3 navbarBtn fw-bold"
              onClick={homeButtonHandler}
            >
              Home
            </button>
          </li>
          <li className="nav-item text">
            <button
              className="px-2 py-1 mx-3 navbarBtn fw-bold"
              onClick={clickAboutUs}
            >
              About Us
            </button>
          </li>
          <li className="nav-item text">
            <button className="px-2 py-1 mx-3 navbarBtn fw-bold">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

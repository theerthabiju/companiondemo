import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "../../assets/css/navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideLoginBtn =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Companion" className="logo-img" />
          <span className="brand-name ms-2">Companion</span>
        </a>

        <button
          className="navbar-toggler custom-toggler"
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
          className="collapse navbar-collapse mobile-menu"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link text-black" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
                  <Link className="nav-link text-black" to="/companion/exploreride">
                ExploreRides
              </Link>
              
            </li>
            <li className="nav-item">
                   <Link className="nav-link text-black" to="/companion/postnewride">
                Post a New Ride
              </Link>
             
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Stories
              </a>
            </li>
             <li className="nav-item">
              <Link className="nav-link text-black" to="/companion/aboutus">
              About Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="d-flex justify-content-center gap-2 mb-2 mb-lg-0">
            {!hideLoginBtn && (
              <Link to="/signin" className="btn loginbtn text-black">
                Login
              </Link>
            )}
         <button className="btn findaridebtn text-white" type="button">
               <Link className="nav-link " to="/companion/exploreride">
                 Find A Ride   
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../../assets/css/navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideLoginBtn =
    location.pathname === "/signin" || location.pathname === "/signup";

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  const closeMobileMenu = () => {
    const menu = mobileMenuRef.current;
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
            onClick={closeMobileMenu}
          >
            <img src={logo} alt="Companion" className="logo-img" />
            <span className="brand-name ms-2">Companion</span>
          </Link>

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
            ref={mobileMenuRef}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link text-black "
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-black"
                  to="/companion/exploreride"
                  onClick={closeMobileMenu}
                >
                  Explore Rides
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-black"
                  to="/companion/postnewride"
                  onClick={closeMobileMenu}
                >
                  Post a New Ride
                </Link>
              </li>

              {/* Community with dropdown */}
              <li className="nav-item " id="communityid">
                <button
                  type="button"
                  className="nav-link text-black bg-transparent border-0"
                  onClick={toggleDropdown}
                  aria-expanded={showDropdown}
                  aria-haspopup="true"
                >
                  Community <i className="bi bi-chevron-compact-down"></i>
                </button>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-black"
                  to="/companion/Blogs"
                  onClick={closeMobileMenu}
                >
                  Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-black"
                  to="/companion/aboutus"
                  onClick={closeMobileMenu}
                >
                  About 
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-black"
                  to="/companion/Contact"
                  onClick={closeMobileMenu}
                >
                  Contact 
                </Link>
              </li>
            </ul>{" "}
            <div className="d-flex justify-content-center gap-2 mb-2 mb-lg-0">
              <button
                className="btn btn-outline profileicon"
                onClick={closeMobileMenu}
              >
                <Link to="/Profile">
                  <i className="bi bi-person-circle profileicon"></i>
                </Link>
              </button>
           <button className="loginhomebtn" >
  {!hideLoginBtn && (
                <Link
                  to="/signin"
                  className="btn loginbtn text-black"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              )}
           </button>
            

              <button
                className="btn findaridebtn text-white"
                type="button"
                onClick={closeMobileMenu}
              >
                <Link className="nav-link" to="/companion/exploreride">
                  Find A Ride
                </Link>
              </button>
            </div>
        
          </div>
        </div>
      </nav>

      {/* Dropdown Panel for Community */}
      {showDropdown && (
        <div className="custom-dropdown-panel" ref={dropdownRef}>
          <ul className="list-unstyled m-0 text-center">
            <li>
              <Link
                className="dropdown-link"
                to="/companion/community"
                onClick={() => {
                  closeMobileMenu();
                  setShowDropdown(false);
                }}
              >
                Community List
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-link"
                to="/companion/add-community"
                onClick={() => {
                  closeMobileMenu();
                  setShowDropdown(false);
                }}
              >
                Add Community
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

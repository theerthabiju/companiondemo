import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../../assets/css/footer.css";
import companion_white from "../../assets/images/companion_white.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="footersection text-white">
      <div className="container footercontainer">
        <div className="row gy-4 footerrow">

          {/* Logo & Intro */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-lg-start footercol1">
            <div className="d-flex justify-content-start align-items-center mb-2">
              <img
                src={companion_white}
                alt="logo"
                className="me-2 footerlogo"
                style={{ width: "50px" }}
              />
            </div>
            <p className="companiontext text-start mt-3">
              At Companion, we’re dedicated to making every adventure safer and
              more meaningful — built on the foundation of trust, connection,
              and care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-6 col-lg-3 text-lg-start footercol2">
            <p className="footersubhead">Quick Links</p>
            <div className="links">
              <p><Link to="/companion/aboutus">About Us</Link></p>
              <p><Link to="/companion/Contact">Contact Us</Link></p>
              <p><Link to="/companion/community">Community List</Link></p>
              <p><Link to="/companion/postnewride">Post a New Ride</Link></p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-6 col-md-6 col-lg-2 text-lg-start footercol3">
            <p className="footersubhead">Contact Info</p>
            <div className="links2">
              <p><i className="bi bi-telephone-fill me-1"></i> +91 70000 12222</p>
              <p><i className="bi bi-geo-alt-fill me-1"></i> Kerala, India</p>
              <p><i className="bi bi-envelope-fill me-1"></i> companion@gmail.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-12 col-md-6 col-lg-3 text-end footercol4">
            <p className="footersubhead">Connect With Us</p>
            <div className="d-flex gap-5 social-icon flex-wrap mt-4">
              <a href="#"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#"><i className="bi bi-envelope-fill fs-5"></i></a>
            </div>
          </div>
        </div>

        <hr className="my-4 text-white" />

        {/* Copyright */}
        <div className="text-center small copyrightrow">
          <p className="mb-0">
            © 2025 Companion. All rights reserved. Developed by{" "}
            <b>
              <a
                href="https://xeventure.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                Xeventure
              </a>
            </b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

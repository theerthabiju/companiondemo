import React from 'react';
import '../../assets/css/footer.css';
import companion_white from '../../assets/images/companion_white.png';

const Footer = () => {
  return (
    <footer className="footersection text-white">
      <div className="container footercontainer">
        <div className="row gy-4 footerrow">

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-lg-start footercol1">
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-2">
              <img src={companion_white} alt="logo" className="me-2 footerlogo" style={{ width: '50px' }} />
            </div>
            <p className="companiontext mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
            </p>
          </div>

          <div className="col-6 col-md-6 col-lg-3 text-center text-lg-start footercol2">
            <p className="footersubhead">Quick Links</p>
            <div className="links">
              <p><a href="#">About</a></p>
              <p><a href="#">Contact</a></p>
              <p><a href="#">Community</a></p>
              <p><a href="#">Create a new ride</a></p>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-2 text-center text-lg-start footercol3">
            <p className="footersubhead">Contact Info</p>
            <div className="links2">
              <p><i className="bi bi-telephone-fill me-1"></i> +91 70000 12222</p>
              <p><i className="bi bi-geo-alt-fill me-1"></i> Kerala, India</p>             
              <p ><i className="bi bi-envelope-fill me-1"></i> companion@gmail.com</p>

            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 text-end text-lg-start footercol4">
            <p className="footersubhead ">Connect With Us</p>
            <div className="d-flex  gap-5 social-icon flex-wrap mt-4 ">
              <a href="#"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#"><i className="bi bi-twitter fs-5"></i></a>
              <a href="#"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#"><i className="bi bi-envelope-fill fs-5"></i></a>
            </div>
      
          </div>

        </div>

        <hr className="my-4 text-white" />

        <div className="text-center small copyrightrow">
          <p className="mb-0">© 2025 Companion. All rights reserved. Developed by Xeventure </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

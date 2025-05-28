import React, { useState, useEffect } from "react";
import "../../assets/css/comfeaturehome.css";

import featureimg1 from "../../assets/images/featureimg.png";
import featureimg2 from "../../assets/images/featureimg2.png";
import featureimg3 from "../../assets/images/featureimg3.png";
import featureimg4 from "../../assets/images/featureimg4.png";
import featureimg5 from "../../assets/images/featureimg5.png";
import icons1 from "../../assets/images/icons1.png";
import icons2 from "../../assets/images/icons2.png";
import icons3 from "../../assets/images/icons3.png";
import icons4 from "../../assets/images/icons4.png";
import { useNavigate } from "react-router-dom";

const images = [
  featureimg1,
  featureimg2,
  featureimg3,
  featureimg4,
  featureimg5,
];

const Comfeaturehome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container comfeaturecontainer">
      <h3 className="featuretext text-start">
        <span className="traveltext">Travel</span> Community Features
      </h3>
    


      <div className="row comfeaturerow text-center mt-5">
        
        <div className="col-lg-6 order-1 order-lg-1 mb-4 mb-lg-0">
          <img
            className={` img-fluid featureimg ${fade ? "fade-in" : "fade-out"}`}
            src={images[currentIndex]}
            alt={`feature-${currentIndex}`}
          />
        </div>
        <div className="col-lg-6 order-2 order-lg-2 text-start">
          <div className="row comfeaturerow2 ">
              <h5 className="comfeaturerow2-head">
        Share Spots, Join Rides, <br /> 
         <span className="enhancehighlight">And  Enhance Every Trip Together.
          </span>
      </h5>
            <hr />

            <div className="col-md-6 comfeaturebtn  text-start">
              <button
                onClick={() => {
                  navigate("/companion/tent");
                }}
                className="btn btn-outline text-start "
              >
                {" "}
                <img className="iconimg1" src={icons1} alt="iconimg1" /> Add
                Tent Locations
              </button>
              <button
                onClick={() => {
                  navigate("/companion/midwayjoin");
                }}
                className="btn btn-outline text-start"
              >
                {" "}
                <img className="iconimg2" src={icons2} alt="iconimg1" /> Midway
                Join Request
              </button>
              <button
                onClick={() => {
                  navigate("/companion/addviewpoints");
                }}
                className="btn btn-outline text-start"
              >
                {" "}
                <img className="iconimg3" src={icons3} alt="iconimg1" /> Add
                View Points
              </button>{" "}
              <br />
              <button
                onClick={() => {
                  navigate("/companion/localevents");
                }}
                className="btn btn-outline text-start"
              >
                {" "}
                <img className="iconimg4" src={icons4} alt="iconimg1" /> Local
                Events{" "}
              </button>
            </div>
            <div className="col-md-6 comfeaturerow2text">
              <p className="comfeaturerow2-sub  mt-4">
                {" "}
                Our travel community is built to turn every journey into a
                shared experience. Whether you're discovering hidden tent
                locations, sharing scenic viewpoints with photos, or posting
                local events that bring a place to life, your contributions help
                others travel smarter and deeper. Each feature is designed to
                make travel more interactive, authentic, and community-driven.
                From midway ride join requests to route-based travel tips like
                the best time to visit, this section empowers travelers to
                connect, collaborate, and support one another in real time..
                It's more than just a tool it's a platform to make your
                adventure part of something bigger. Together, we're creating a
                living map shaped by real journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comfeaturehome;

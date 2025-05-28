import React, { useState, useEffect } from "react";
import "../../assets/css/communityhome.css";
import HC01 from "../../assets/images/HC01.png";
import HC02 from "../../assets/images/HC02.png";
import HC03 from "../../assets/images/HC03.png";
import HC04 from "../../assets/images/HC04.png";
import HC05 from "../../assets/images/HC05.png";
import HC06 from "../../assets/images/HC06.png";
import HC07 from "../../assets/images/HC07.png";
import HC08 from "../../assets/images/HC08.png";
import HC09 from "../../assets/images/HC09.png";

const Communityhome = () => {
  const [showExtraRow, setShowExtraRow] = useState(false);

  const toggleRow = () => {
    setShowExtraRow((prev) => !prev);
  };

  useEffect(() => {
    const images = document.querySelectorAll(".hcimg");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    images.forEach((img) => observer.observe(img));

    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, [showExtraRow]); 

  return (
    <div>
      <section className="communityhomesection">
        <div className="container HCcontainer">
          <h2 className="Communitytext">Community</h2>

          <div className="row HCrow1">
            <div className="col-lg-6 img-wrapper position-relative mt-3">
              <img src={HC01} alt="hcimg" className="w-100 hcimg" />
              <div className="top-left-text">Backpackers</div>
            </div>

            <div className="col-lg-6">
              <div className="row hcrow1">
                <div className="col-lg-6 img-wrapper position-relative mt-3">
                  <img src={HC02} alt="hcimg" className="w-100 hcimg" />
                  <div className="top-left-text">Bullet Clubs</div>
                </div>
                <div className="col-lg-6 img-wrapper position-relative mt-3">
                  <img src={HC03} alt="hcimg" className="w-100 hcimg" />
                  <div className="top-left-text">Campus Cruisers</div>
                </div>
              </div>
              <div className="row hcrow2">
                <div className="col-lg-6 img-wrapper position-relative mb-3">
                  <img src={HC04} alt="hcimg" className="w-100 hcimg" />
                  <div className="top-left-text">Bus Tribes</div>
                </div>
                <div className="col-lg-6 img-wrapper position-relative mt-0">
                  <img src={HC05} alt="hcimg" className="w-100 hcimg" />
                  <div className="top-left-text">Techie Travel Club</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row HCrow2">
            <div className="col-3 img06 img-wrapper position-relative">
              <img src={HC06} alt="hcimg" className="w-100 hcimg" />
              <div className="top-left-text">Off-Roaders</div>
            </div>
            <div className="col-3 img06 img-wrapper position-relative">
              <img src={HC07} alt="hcimg" className="w-100 hcimg" />
              <div className="top-left-text">Wander Women Rides</div>
            </div>
            <div className="col-3 img06 img-wrapper position-relative">
              <img src={HC08} alt="hcimg" className="w-100 hcimg" />
              <div className="top-left-text">Kerala Hikers</div>
            </div>
            <div className="col-3 img06 img-wrapper position-relative">
              <img src={HC09} alt="hcimg" className="w-100 hcimg" />
              <div className="top-left-text">Kerala Bikers</div>
            </div>
          </div>

          <div
            className={`row HCrow2 HCrow2-animated ${
              showExtraRow ? "show" : ""
            }`}
          >
            <div className="col-3 img06 img-wrapper position-relative">
              <img src={HC06} alt="hcimg" className="w-100 hcimg" />
              <div className="top-left-text">Off-Roaders</div>
            </div>
            <div className="col-3 img06 img-wrapper position-relative">
              <img src={HC07} alt="hcimg" className="w-100 hcimg" />
              <div className="top-left-text">Wander Women Rides</div>
            </div>
            <div className="col-3 img06 img-wrapper position-relative">
              <img src={HC08} alt="hcimg" className="w-100 hcimg" />
              <div className="top-left-text">Kerala Hikers</div>
            </div>
            <div className="col-3 img06 img-wrapper position-relative">
              <img src={HC09} alt="hcimg" className="w-100 hcimg" />
              <div className="top-left-text">Kerala Bikers</div>
            </div>
          </div>

          <p
            className="learntext"
            onClick={toggleRow}
            style={{ cursor: "pointer" }}
          >
            {showExtraRow ? "Load Less..." : "Load More..."}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Communityhome;

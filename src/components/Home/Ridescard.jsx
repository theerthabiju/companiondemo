import React from "react";
import "../../assets/css/ridescard.css";
import ride01 from "../../assets/images/ride01.png";
import ride02 from "../../assets/images/ride02.png";
import ride03 from "../../assets/images/ride03.png";
import VerifiedBadge from "../../assets/images/VerifiedBadge.png";


const Ridescard = () => {
  return (
    <div className="card-container ridecontainer">
      <div className="fullcard">
        <div className="ride-card">
          <img  src={ride01} alt="Destination" />
        </div>
        <div className="card-overlay rideoverlay">
          <div className="ride-info ">
            <div className="ride-route">Kalpetta → Bangalore</div>
            <div className="ride-user">
              <div className="verified-icon"><img src={VerifiedBadge} alt="VerifiedBadgeicon" /></div>
              <span>Siyad</span>
            </div>
            <div className="ride-Seat">
              <p>Seats Available</p>
              <button className="join-btn">Join Ride</button>
            </div>
          </div>
        </div>
      </div>

      <div className="fullcard">
        <div className="ride-card">
          <img src={ride02} alt="Destination" />
        </div>
        <div className="card-overlay  rideoverlay">
          <div className="ride-info ">
            <div className="ride-route">Kalpetta → Bangalore</div>
            <div className="ride-user">
              <div className="verified-icon"><img src={VerifiedBadge} alt="VerifiedBadgeicon" /></div>
              <span>Siyad</span>
            </div>
            <div className="ride-Seat">
              <p>Seats Available</p>
              <button className="join-btn">Join Ride</button>
            </div>
          </div>
        </div>
      </div>

      <div className="fullcard">
        <div className="ride-card">
          <img src={ride03} alt="Destination" />
        </div>
        <div className="card-overlay  rideoverlay">
          <div className="ride-info ">
            <div className="ride-route">Kalpetta → Bangalore</div>
            <div className="ride-user">
              <div className="verified-icon"><img src={VerifiedBadge} alt="VerifiedBadgeicon" /></div>
              <span>Siyad</span>
            </div>
            <div className="ride-Seat">
              <p>Seats Available</p>
              <button className="join-btn">Join Ride</button>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Ridescard;

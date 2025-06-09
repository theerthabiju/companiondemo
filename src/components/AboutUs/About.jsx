import React from "react";
import "../../assets/css/sub-css/about.css";
import F_icon1 from "../../assets/images/F_icon1.png";
import F_icon2 from "../../assets/images/F_icon2.png";
import F_icon3 from "../../assets/images/F_icon3.png";
import F_icon4 from "../../assets/images/F_icon4.png";

const About = () => {
  return (
    <div className="container aboutcontainer">
      <h3 className="aboutushead">About Us</h3>
      <span className="hrhead">
        <hr />
      </span>

      <div className="slide-down">
        <h3 className="aboutustext">
          Where Every Journey <br /> <span className="aboutushighlight">Begins with Trust</span>
        </h3>

        <p className="aboutusparagraph">
          We specialize in connecting travelers with verified spots, helpful resources, and real-time insights to enhance every adventure.
          Built on a foundation of trust and innovation, our platform ensures you explore with confidence—no matter where the road leads.
          <br /><br />
          At Companion, we believe every journey begins with trust — and we’re here to walk that path with you.
          We are a travel-tech platform designed to guide and support explorers, campers, and outdoor lovers by offering verified locations, safety insights, and essential resources.
          <br /><br />
          Whether you're venturing into the mountains, setting up camp by a lake, or discovering hidden gems on the road, Companion is here to help you feel prepared, safe, and inspired.
          Founded on the principles of safety, community, and connection, we’re more than just an app — we’re the partner that journeys with you.
        </p>
      </div>

      <div className="features-container">
        <div className="notch"><img className="notchicon" src={F_icon1} alt="Customer Delight" /></div>
        <div className="notch"><img className="notchicon" src={F_icon2} alt="Tent Spot" /></div>
        <div className="notch"><img className="notchicon" src={F_icon3} alt="Mid-Way Join" /></div>
        <div className="notch"><img className="notchicon" src={F_icon4} alt="Add View Point" /></div>

        <div className="feature">
          <div className="feature-title">Customer Delight</div>
          <div className="feature-description">
            We deliver the best service and experience for our customers.
          </div>
        </div>

        <div className="feature">
          <div className="feature-title">Tent Spot</div>
          <div className="feature-description">
            Help fellow travelers by sharing your favorite camping spots.
          </div>
        </div>

        <div className="feature">
          <div className="feature-title">Mid-Way Join</div>
          <div className="feature-description">
            Discover rides already on the move and join from convenient pickup points.
          </div>
        </div>

        <div className="feature">
          <div className="feature-title">Add a View Point</div>
          <div className="feature-description">
            Share your favorite scenic viewpoints to inspire and guide others.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

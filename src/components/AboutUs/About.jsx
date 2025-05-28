import React from "react";
import "../../assets/css/sub-css/about.css";
import F_icon1 from "../../assets/images/F_icon1.png";
import F_icon2 from "../../assets/images/F_icon2.png";
import F_icon3 from "../../assets/images/F_icon3.png";
import F_icon4 from "../../assets/images/F_icon4.png";



const About = () => {
  return (
    <div className="container aboutcontainer ">
          <h3 className='aboutushead'>About Us</h3>
      <span className='hrhead'><hr /></span>
      <h3 className="aboutustext">Where Every Journey <br /> <span className="aboutushighlight"> Begins with Trust </span></h3>
      <p className="aboutusparagraph">
       We specialize in connecting travelers with verified spots, helpful resources, and real-time insights to enhance every adventure.
Built on a foundation of trust and innovation, our platform ensures that you explore with confidence, no matter where the road leads.
At Companion, we believe every journey begins with trust — and we’re here to walk that path with you.
We are a travel-tech platform designed to guide and support explorers, campers, and outdoor lovers by offering verified locations, safety insights, and essential resources.
Our mission is to empower every traveler with confidence through real-time information, community-driven tips, and seamless planning tools.
Whether you're venturing into the mountains, setting up camp by a lake, or discovering hidden gems on the road, Companion is here to help you feel prepared, safe, and inspired.
Founded on the principles of safety, community, and connection, we’re more than just an app — we’re the partner that journeys with you.



      </p>

      <div className="features-container">
        <div className="notch"><img className="notchicon" src={F_icon1} alt="icon" /></div>
        <div className="notch"><img  className="notchicon" src={F_icon2} alt="icon" /></div>
        <div className="notch"><img  className="notchicon" src={F_icon3} alt="icon" /></div>
        <div className="notch"><img  className="notchicon" src={F_icon4} alt="icon" /></div>

        <div className="feature">
          <div className="feature-title">Customer Delight</div>
          <div className="feature-description">
            We deliver the best service and experience for our customer.
          </div>
        </div>

        <div className="feature">
          <div className="feature-title">Authentic Adventure</div>
          <div className="feature-description">
            We deliver the real adventure experience for our dear customer.
          </div>
        </div>

        <div className="feature">
          <div className="feature-title">Expert Guides</div>
          <div className="feature-description">
            We deliver only expert tour guides for our dear customer.
          </div>
        </div>

        <div className="feature">
          <div className="feature-title">Time Flexibility</div>
          <div className="feature-description">
            We welcome time flexibility of traveling for our dear customer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

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
        Welcome to Greece, a country of beautiful contradictions. Walk through
        the country’s groves and archaeological sites, visit groups of islands,
        get to know the beaches, gorges and mountains, and enjoy nature’s
        breathtaking scenery. The country’s rich history, culture and coastline
        have made it one of the world’s favourite tourist destinations. In
        winter, Greece is ideal for winter sports. Ski resorts with ultra-modern
        facilities offer an unforgettable experience down spectacular ski runs.
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

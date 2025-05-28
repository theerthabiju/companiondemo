import React, { useEffect } from "react";
import "../../assets/css/specialfeature/midway.css";
import midwayimg1 from "../../assets/images/midwayimg1.png";
import midwayimg2 from "../../assets/images/midwayimg2.png";
import midwayimg3 from "../../assets/images/midwayimg3.png";
import midwayimg4 from "../../assets/images/midwayimg4.png";
import calendarblue from "../../assets/images/calendarblue.png";
import Location from "../../assets/images/Location.png";


const Midway = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container midway-container">
      <h3 className="midwaytextheading">
        <span className="joinfromtext">Join from</span> Anywhere Along the Route
      </h3>
      <p className="midway-subtext text-center">
        Discover rides already on the move and join from convenient pickup
        points. <br />
        Whether you're joining late or hopping in halfway — it's your journey,
        your choice.
      </p>

      <div className="row midwayrow mt-5">

  <div className="col-md-3 col-sm-6 midwaycol">
          <div className="midway-card">
              <img className="midway-img" src={midwayimg1} alt="Destination" />
              <div className="midwayoverlay ">
                <div className="midway-info">
                <span className="midwayride-route">Kalpetta → Bangalore</span>
                </div>
            </div>
            <div className="midway-body midwaybody">
              <p className="travelertext">Traveler</p>
              <p className="departure">Departure: 6:00 AM, 10th May</p>
              <p className="midwaydate">
                <img src={calendarblue} alt="Calendar" />
                <span>20/9/2025</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Aluva (Pickup @ 6:20 AM)</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Adimali (Pickup @ 8:00 AM)</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Kothamangalam (Pickup @ 7:10 AM)</span>
              </p>
            </div>
           <span className="midway-hr"><hr/></span> 
           <button className="btn btn-outline midwaybtn">Request to Join</button>
          </div>
        </div>
      


        <div className="col-md-3 col-sm-6 midwaycol">
          <div className="midway-card">
              <img className="midway-img" src={midwayimg2} alt="Destination" />
              <div className="midwayoverlay ">
                <div className="midway-info">
                <span className="midwayride-route">Kalpetta → Bangalore</span>
                </div>
            </div>
            <div className="midway-body midwaybody">
              <p className="travelertext">Ambassador</p>
              <p className="departure">Departure: 6:00 AM, 10th May</p>
              <p className="midwaydate">
                <img src={calendarblue} alt="Calendar" />
                <span>20/9/2025</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Aluva (Pickup @ 6:20 AM)</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Adimali (Pickup @ 8:00 AM)</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Kothamangalam (Pickup @ 7:10 AM)</span>
              </p>
            </div>
           <span className="midway-hr"><hr/></span> 
           <button className="btn btn-outline midwaybtn">Request to Join</button>
          </div>
        </div>


        <div className="col-md-3 col-sm-6 midwaycol">
          <div className="midway-card">
              <img className="midway-img" src={midwayimg3} alt="Destination" />
              <div className="midwayoverlay ">
                <div className="midway-info">
                <span className="midwayride-route">Kalpetta → Bangalore</span>
                </div>
            </div>
            <div className="midway-body midwaybody">
              <p className="travelertext">BMW</p>
              <p className="departure">Departure: 6:00 AM, 10th May</p>
              <p className="midwaydate">
                <img src={calendarblue} alt="Calendar" />
                <span>20/9/2025</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Aluva (Pickup @ 6:20 AM)</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Adimali (Pickup @ 8:00 AM)</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Kothamangalam (Pickup @ 7:10 AM)</span>
              </p>
            </div>
           <span className="midway-hr"><hr/></span> 
           <button className="btn btn-outline midwaybtn">Request to Join</button>
          </div>
        </div>

  <div className="col-md-3 col-sm-6">
          <div className="midway-card">
              <img className="midway-img" src={midwayimg4} alt="Destination" />
              <div className="midwayoverlay ">
                <div className="midway-info">
                <span className="midwayride-route">Kalpetta → Bangalore</span>
                </div>
            </div>
            <div className="midway-body midwaybody">
              <p className="travelertext">Royal Enfield</p>
              <p className="departure">Departure: 6:00 AM, 10th May</p>
              <p className="midwaydate">
                <img src={calendarblue} alt="Calendar" />
                <span>20/9/2025</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Aluva (Pickup @ 6:20 AM)</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Adimali (Pickup @ 8:00 AM)</span>
              </p>
              <p className="midwaylocationtext">
                <img src={Location} alt="Location" />
                <span>Kothamangalam (Pickup @ 7:10 AM)</span>
              </p>
            </div>
           <span className="midway-hr"><hr/></span> 
           <button className="btn btn-outline midwaybtn">Request to Join</button>
          </div>
        </div>
       

      </div>
    </div>
  );
};

export default Midway;

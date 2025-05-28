import React, { useState } from "react";
import "../../assets/css/sub-css/explorecard.css";
import dropdown from "../../assets/images/dropdown.png";
import filter1 from "../../assets/images/filter1.png";
import filter2 from "../../assets/images/filter2.png";
import filter3 from "../../assets/images/filter3.png";
import filter4 from "../../assets/images/filter4.png";
import filter5 from "../../assets/images/filter5.png";
import filter6 from "../../assets/images/filter6.png";
import calendarblue from "../../assets/images/calendarblue.png";



const Exploreride = () => {
  const [price, setPrice] = useState([500, 20000]);
  const [passengers, setPassengers] = useState([1, 30]);
  const [showFilter, setShowFilter] = useState(false);
  const [rideTypeOpen, setRideTypeOpen] = useState(false);
  const [pickupOpen, setPickupOpen] = useState(false);
  const [dropoffOpen, setDropoffOpen] = useState(false);
  const [selectedRideType, setSelectedRideType] = useState("Select Ride Type");
  const [selectedPickup, setSelectedPickup] = useState("Select Pickup Location");
  const [selectedDropoff, setSelectedDropoff] = useState("Select Drop-Off Location");


  const toggleFilter = () => setShowFilter(!showFilter);
  const rideTypes = ["Bicycle", "Car", "Bus", "Two Wheeler", "Heavy truck", "Traveler"];
  const locations = ["Kalpetta", "Bangalore", "Wayanad", "Kozhikode"];
  const filterImages = [filter1, filter2, filter3, filter4, filter5, filter6];

  return (
    <div className="container filtercontainer">
      <h3 className="explorehead">Explore Rides</h3>
      <span className="hrhead"><hr /></span>
      <button className="btn btn-outline toggle-filter-btn mb-3 " onClick={toggleFilter}>
        {showFilter ? "Hide Filters" : "Show Filters"}
      </button>
      <div className="row filterrow gx-5 gy-5">
  <div
  className={`col-lg-3 filtercol filter-sidebar transition-sidebar ${
    showFilter ? "show" : "hide"
  }`}
>
  {showFilter && (
    <ul className="text-start  filterul">
      {/* Close button for mobile */}
      <button className="close-filter-btn d-lg-none" onClick={toggleFilter}>
        &times;
      </button>
 <button className="btn btn-outline applyfilterbtn mb-3 mt-0">Apply Filter</button>
      <span className="text-white"><hr /></span>
      
      {/* Ride Type Dropdown */}
      <div className="dropdown mb-5  position-relative ">
        <div className="d-flex justify-content-between align-items-center filterlist text-white mb-2" style={{ cursor: "pointer" }} onClick={() => setRideTypeOpen(!rideTypeOpen)}>
          <span>{selectedRideType}</span>
          <img src={dropdown} alt="dropdown" />
        </div>
        {rideTypeOpen && (
          <ul className="dropdown-menu show position-static border">
            {rideTypes.map((type, i) => (
              <li key={i} className="dropdown-item dropdownbg" style={{ cursor: "pointer" }} onClick={() => {
                setSelectedRideType(type);
                setRideTypeOpen(false);
              }}>{type}</li>
            ))}
          </ul>
        )}
      </div>
 {/* Pickup Dropdown */}
              <div className="dropdown mb-5   position-relative">
                <div className="d-flex justify-content-between align-items-center filterlist text-white mb-2" style={{ cursor: "pointer" }} onClick={() => setPickupOpen(!pickupOpen)}>
                  <span>{selectedPickup}</span>
                  <img src={dropdown} alt="dropdown" />
                </div>
                {pickupOpen && (
                  <ul className="dropdown-menu show position-static border">
                    {locations.map((loc, i) => (
                      <li key={i} className="dropdown-item dropdownbg" style={{ cursor: "pointer" }} onClick={() => {
                        setSelectedPickup(loc);
                        setPickupOpen(false);
                      }}>{loc}</li>
                    ))}
                  </ul>
                )}
              </div>
       {/* Dropoff Dropdown */}
              <div className="dropdown mb-5 position-relative">
                <div className="d-flex justify-content-between align-items-center filterlist text-white mb-2" style={{ cursor: "pointer" }} onClick={() => setDropoffOpen(!dropoffOpen)}>
                  <span>{selectedDropoff}</span>
                  <img src={dropdown} alt="dropdown" />
                </div>
                {dropoffOpen && (
                  <ul className="dropdown-menu show position-static border">
                    {locations.map((loc, i) => (
                      <li key={i} className="dropdown-item dropdownbg" style={{ cursor: "pointer" }} onClick={() => {
                        setSelectedDropoff(loc);
                        setDropoffOpen(false);
                      }}>{loc}</li>
                    ))}
                  </ul>
                )}
              </div>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="filterlist text-white mb-2">Select Date</label>
        <input
          type="date"
          className="form-control datefilter"
        />
      </div>

      <span className="text-white"><hr /></span>

      {/* Sliders */}
      <div className="slider-filter">
        {/* Price Slider */}
        <div className="slider-section">
          <label className="slider-label">Price</label>
          <input
            type="range"
            min="500"
            max="200000"
            value={price[1]}
            onChange={(e) => setPrice([price[0], +e.target.value])}
            className="slider"
          />
          <div className="slider-values">
            <span>{price[0]}</span>
            <span>{price[1]}</span>
          </div>
        </div>

        {/* Passenger Slider */}
        <div className="slider-section">
          <label className="slider-label">No. of Passengers</label>
          <input
            type="range"
            min="1"
            max="30"
            value={passengers[1]}
            onChange={(e) => setPassengers([passengers[0], +e.target.value])}
            className="slider"
          />
          <div className="slider-values">
            <span>{passengers[0]}</span>
            <span>{passengers[1]}</span>
          </div>
        </div>
      </div>
    </ul>
  )}


</div>

       
        <div className={showFilter ? "col-lg-9 " : "col-12"}  >
          <div className="row g-4 p-4">
            {filterImages.map((img, index) => (
              <div className="col-md-6 col-lg-4  exploreridecol" key={index}>
                <div className="exploreridecard">
                  <img className="exploreridecard-img" src={img} alt="Destination" />
                  <div className="exploreridecardoverlay">
                    <div className="exploreridecard-info">
                      <span className="exploreridecardride-route">Kalpetta → Bangalore</span>
                    </div>
                  </div>
                  <div className="exploreridecard-body exploreridecardbody">
                    <p className="travelertext">{rideTypes[index]}</p>
                    <p className="departure">Departure: 6:00 AM, 10th May</p>
                    <p className="exploreridecarddate">
                      <img src={calendarblue} alt="Calendar" />
                      <span>20/09/2025</span>
                    </p>
                  </div>
                  <span className="exploreridecard-hr"><hr /></span>
                  <button className="btn btn-outline exploreridecardbtn">Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exploreride;

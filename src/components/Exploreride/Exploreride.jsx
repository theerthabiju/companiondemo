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
  // Actual filters used for display
  const [filters, setFilters] = useState({
    rideType: "Select Ride Type",
    pickup: "Select Pickup Location",
    dropoff: "Select Drop-Off Location",
    date: "",
    price: [500, 20000],
    passengers: [1, 30],
  });

  // Temporary inputs from the filter panel
  const [tempFilters, setTempFilters] = useState({ ...filters });

  const [showFilter, setShowFilter] = useState(false);
  const [rideTypeOpen, setRideTypeOpen] = useState(false);
  const [pickupOpen, setPickupOpen] = useState(false);
  const [dropoffOpen, setDropoffOpen] = useState(false);

  const toggleFilter = () => setShowFilter(!showFilter);

  const rideTypes = [
    "Bicycle",
    "Car",
    "Bus",
    "Two Wheeler",
    "Heavy truck",
    "Traveler",
  ];
  const locations = ["Kalpetta", "Bangalore", "Wayanad", "Kozhikode"];

  const rideData = [
    {
      id: 1,
      rideType: "Bicycle",
      pickup: "Kalpetta",
      dropoff: "Bangalore",
      price: 1000,
      passengers: 1,
      departureTime: "6:00 AM",
      date: "2025-09-20",
      image: filter1,
    },
    {
      id: 2,
      rideType: "Car",
      pickup: "Wayanad",
      dropoff: "Kozhikode",
      price: 5000,
      passengers: 4,
      departureTime: "8:00 AM",
      date: "2025-09-20",
      image: filter2,
    },
    {
      id: 3,
      rideType: "Bus",
      pickup: "Kalpetta",
      dropoff: "Bangalore",
      price: 20000,
      passengers: 30,
      departureTime: "5:00 AM",
      date: "2025-09-22",
      image: filter3,
    },
    {
      id: 4,
      rideType: "Two Wheeler",
      pickup: "Kozhikode",
      dropoff: "Wayanad",
      price: 1500,
      passengers: 2,
      departureTime: "9:00 AM",
      date: "2025-09-21",
      image: filter4,
    },
    {
      id: 5,
      rideType: "Heavy truck",
      pickup: "Bangalore",
      dropoff: "Kalpetta",
      price: 18000,
      passengers: 1,
      departureTime: "3:00 AM",
      date: "2025-09-19",
      image: filter5,
    },
    {
      id: 6,
      rideType: "Traveler",
      pickup: "Kalpetta",
      dropoff: "Kozhikode",
      price: 9000,
      passengers: 12,
      departureTime: "7:00 AM",
      date: "2025-09-20",
      image: filter6,
    },
  ];

  const applyFilters = () => {
    setFilters({ ...tempFilters });
    setShowFilter(false);
  };

  const filteredRides = rideData.filter((ride) => {
    const { rideType, pickup, dropoff, date, price, passengers } = filters;

    const matchesRideType =
      rideType === "Select Ride Type" || ride.rideType === rideType;
    const matchesPickup =
      pickup === "Select Pickup Location" || ride.pickup === pickup;
    const matchesDropoff =
      dropoff === "Select Drop-Off Location" || ride.dropoff === dropoff;
    const matchesDate = !date || ride.date === date;
    const matchesPrice = ride.price >= price[0] && ride.price <= price[1];
    const matchesPassengers =
      ride.passengers >= passengers[0] && ride.passengers <= passengers[1];

    return (
      matchesRideType &&
      matchesPickup &&
      matchesDropoff &&
      matchesDate &&
      matchesPrice &&
      matchesPassengers
    );
  });

  return (
    <div className="container filtercontainer">
      <h3 className="explorehead">Explore Rides</h3>
      <span className="hrhead">
        <hr />
      </span>
      <button
        className="btn btn-outline toggle-filter-btn mb-3"
        onClick={toggleFilter}
      >
        {showFilter ? "Hide Filters" : "Show Filters"}
      </button>

      <div className="row filterrow gx-5 gy-5">
        <div
          className={`col-lg-3 filtercol filter-sidebar transition-sidebar ${
            showFilter ? "show" : "hide"
          }`}
        >
          {showFilter && (
            <ul className="text-start filterul">
              <button
                className="close-filter-btn d-lg-none"
                onClick={toggleFilter}
              >
                &times;
              </button>
              <button
                className="btn btn-outline applyfilterbtn mb-3 mt-0"
                onClick={applyFilters}
              >
                Apply Filter
              </button>
              <span className="text-white">
                <hr />
              </span>

              {/* Ride Type Dropdown */}
              <div className="dropdown mb-5 position-relative">
                <div
                  className="d-flex justify-content-between align-items-center filterlist text-white mb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => setRideTypeOpen(!rideTypeOpen)}
                >
                  <span>{tempFilters.rideType}</span>
                  <img src={dropdown} alt="dropdown" />
                </div>
                {rideTypeOpen && (
                  <ul className="dropdown-menu show position-static border">
                    {rideTypes.map((type, i) => (
                      <li
                        key={i}
                        className="dropdown-item dropdownbg"
                        onClick={() => {
                          setTempFilters((prev) => ({
                            ...prev,
                            rideType: type,
                          }));
                          setRideTypeOpen(false);
                        }}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Pickup Dropdown */}
              <div className="dropdown mb-5 position-relative">
                <div
                  className="d-flex justify-content-between align-items-center filterlist text-white mb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => setPickupOpen(!pickupOpen)}
                >
                  <span>{tempFilters.pickup}</span>
                  <img src={dropdown} alt="dropdown" />
                </div>
                {pickupOpen && (
                  <ul className="dropdown-menu show position-static border">
                    {locations.map((loc, i) => (
                      <li
                        key={i}
                        className="dropdown-item dropdownbg"
                        onClick={() => {
                          setTempFilters((prev) => ({ ...prev, pickup: loc }));
                          setPickupOpen(false);
                        }}
                      >
                        {loc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Dropoff Dropdown */}
              <div className="dropdown mb-5 position-relative">
                <div
                  className="d-flex justify-content-between align-items-center filterlist text-white mb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => setDropoffOpen(!dropoffOpen)}
                >
                  <span>{tempFilters.dropoff}</span>
                  <img src={dropdown} alt="dropdown" />
                </div>
                {dropoffOpen && (
                  <ul className="dropdown-menu show position-static border">
                    {locations.map((loc, i) => (
                      <li
                        key={i}
                        className="dropdown-item dropdownbg"
                        onClick={() => {
                          setTempFilters((prev) => ({ ...prev, dropoff: loc }));
                          setDropoffOpen(false);
                        }}
                      >
                        {loc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Date Picker */}
              <div className="mb-4">
                <label className="filterlist text-white mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  className="form-control datefilter"
                  value={tempFilters.date}
                  onChange={(e) =>
                    setTempFilters((prev) => ({
                      ...prev,
                      date: e.target.value,
                    }))
                  }
                />
              </div>

              <span className="text-white">
                <hr />
              </span>

              {/* Price Slider */}
              <div className="slider-section text-white">
                <label className="slider-label text-white">Price</label>
                <input
                  type="range"
                  min="500"
                  max="200000"
                  value={tempFilters.price[1]}
                  onChange={(e) =>
                    setTempFilters((prev) => ({
                      ...prev,
                      price: [prev.price[0], +e.target.value],
                    }))
                  }
                  className="slider "
                />
                <div className="slider-values">
                  <span>{tempFilters.price[0]}</span>
                  <span>{tempFilters.price[1]}</span>
                </div>
              </div>

              {/* Passenger Slider */}
              <div className="slider-section text-white">
                <label className="slider-label text-white">
                  No. of Passengers
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={tempFilters.passengers[1]}
                  onChange={(e) =>
                    setTempFilters((prev) => ({
                      ...prev,
                      passengers: [prev.passengers[0], +e.target.value],
                    }))
                  }
                  className="slider"
                />
                <div className="slider-values">
                  <span>{tempFilters.passengers[0]}</span>
                  <span>{tempFilters.passengers[1]}</span>
                </div>
              </div>
            </ul>
          )}
        </div>

        {/* Ride Display Section */}
        <div className={showFilter ? "col-lg-9" : "col-12"}>
          <div className="row g-4 p-4">
            {filteredRides.length === 0 ? (
              <p>No rides match your filters.</p>
            ) : (
              filteredRides.map((ride) => (
                <div className="col-md-6 col-lg-4 exploreridecol" key={ride.id}>
                  <div className="exploreridecard">
                    <img
                      className="exploreridecard-img"
                      src={ride.image}
                      alt="Ride"
                    />
                    <div className="exploreridecardoverlay">
                      <div className="exploreridecard-info">
                        <span className="exploreridecardride-route">
                          {ride.pickup} → {ride.dropoff}
                        </span>
                      </div>
                    </div>
                    <div className="exploreridecard-body exploreridecardbody">
                      <p className="travelertext">{ride.rideType}</p>
                      <p className="departure">
                        Departure: {ride.departureTime}
                      </p>
                      <p className="exploreridecarddate">
                        <img src={calendarblue} alt="Calendar" />
                        <span>{ride.date}</span>
                      </p>
                      <p className="price">
                        Price: ₹{ride.price.toLocaleString()}
                      </p>
                      <p className="passengers">
                        Seats Available: {ride.passengers}
                      </p>
                    </div>

                    <span className="exploreridecard-hr">
                      <hr />
                    </span>
                    <button className="btn btn-outline exploreridecardbtn">
                      Details
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exploreride;

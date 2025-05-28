import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/banner.css";
import Doubleup from "../../assets/images/DoubleUp.png";
import Doubledown from "../../assets/images/Doubledown.png";
import Calendar from "../../assets/images/Calendar.png";
import Users from "../../assets/images/Users.png";
import Searchicon from "../../assets/images/Searchicon.png";
import bannerinner1 from "../../assets/images/bannerinner1.png";
import bannerinner2 from "../../assets/images/bannerinner2.png";
import bannerinner3 from "../../assets/images/bannerinner3.png";
import Sortingarrow from "../../assets/images/Sortingarrow.png";
import { axiosInstance } from "../../util/AxiosInstance";

import Pikaday from "pikaday";

const Banner = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log("Base URL:", baseUrl);

  const [pickupPoint, setPickupPoint] = useState("");
  const [dropoffPoint, setDropoffPoint] = useState("");
  const [date, setDate] = useState("");
  const [numberOfPax, setNumberOfPax] = useState();
  const dateInputRef = useRef(null);

  const handleSwap = () => {
    setPickupPoint((prevPickup) => {
      const temp = dropoffPoint;
      setDropoffPoint(prevPickup);
      return temp;
    });
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (pickupPoint.trim() || dropoffPoint.trim()) {
        try {
          const response = await axiosInstance.post("https://your-api.com/autocomplete", {
            pickupPoint,
            dropoffPoint,
          });
          console.log("Suggestions:", response.data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      }
    };

    const delayDebounce = setTimeout(fetchSuggestions, 500);
    return () => clearTimeout(delayDebounce);
  }, [pickupPoint, dropoffPoint]);

  useEffect(() => {
    const picker = new Pikaday({
      field: dateInputRef.current,
      format: "DD/MM/YYYY",
      toString(date) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      },
      parse(dateString) {
        const [day, month, year] = dateString.split("/");
        return new Date(year, month - 1, day);
      },
      onSelect(dateObj) {
        const formatted = picker.toString(dateObj);
        setDate(formatted);
      },
    });

    return () => picker.destroy();
  }, []);

  return (
    <div className="bannercontainer">
      <div className="banner-overlay">
        <div className="banner-content">
          <form
            className="ride-form-card"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form submitted");
              console.log("Pickup Point:", pickupPoint);
              console.log("Dropoff Point:", dropoffPoint);
              console.log("Date:", date);
              console.log("Number of Pax:", numberOfPax);
            }}
          >
            <h2>
              Meet Your New <br />
              <span className="highlight">Ride Buddy</span>
            </h2>

            <div className="form-group bannerformgroup">
              <span>
                <img src={Doubleup} alt="Doubleup" />
              </span>
              <input
                type="text"
                value={pickupPoint}
                onChange={(e) => setPickupPoint(e.target.value)}
                placeholder="PICK-UP POINT"
                className="form-control bannerformcontrol"
                required
              />
            </div>

            <div
              className="Sortingarrow"
              onClick={handleSwap}
              style={{ cursor: "pointer", margin: "10px 0" }}
            >
              <img src={Sortingarrow} alt="Sortingarrow" />
            </div>

            <div className="form-group bannerformgroup">
              <span>
                <img src={Doubledown} alt="Doubledown" />
              </span>
              <input
                type="text"
                value={dropoffPoint}
                onChange={(e) => setDropoffPoint(e.target.value)}
                placeholder="DROP-OFF POINT"
                className="form-control bannerformcontrol"
                required
              />
            </div>

            <div className="form-group bannerformgroup">
              <span>
                <img src={Calendar} alt="Calendar" />
              </span>
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="form-control bannerformcontrol"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                ref={dateInputRef}
                required
              />
            </div>

            <div className="form-group bannerformgroup">
              <span>
                <img src={Users} alt="Users" />
              </span>
              <input
                type="number"
                min="1"
                placeholder="NO. OF PAX"
                className="form-control bannerformcontrol"
                value={numberOfPax}
                onChange={(e) => setNumberOfPax(e.target.value)}
                required
              />
            </div>

            <div className="form-actions">
              <button type="button" className="form-newridebtn">Post A New Ride</button>
              <button type="submit" className="form-searchbtn">
                <img src={Searchicon} alt="Searchicon" /> Search
              </button>
              <button type="button" className="form-joinridebtn">Join A Ride</button>
            </div>
          </form>

          <div className="how-it-works">
            <h2>How It Works</h2>
            <ul>
              <li><span>1</span> Search For Rides</li>
              <li><span>2</span> Connect With Travel Buddies</li>
              <li><span>3</span> Explore The World Together!</li>
            </ul>

            <div className="bannerinnerimg d-flex justify-content-between flex-wrap mt-5">
              <div className="col-4 bannerinner">
                <img src={bannerinner1} alt="bannerinner1" />
                <h5 className="text-white text-center mt-3 Safety">Safety</h5>
              </div>
              <div className="col-4 bannerinner">
                <img src={bannerinner2} alt="bannerinner2" />
                <h5 className="text-white text-center mt-3 Safety">Adventure</h5>
              </div>
              <div className="col-4 bannerinner">
                <img src={bannerinner3} alt="bannerinner3" />
                <h5 className="text-white text-center mt-3 Safety">Cost Sharing</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

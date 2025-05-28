import React, { useEffect, useState } from "react";
import "../../assets/css/specialfeature/tent.css";
import Searchicon from "../../assets/images/Searchicon.png";

const Tent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tentInput, setTentInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const spotsPerPage = 10;
  const [tentSpots, setTentSpots] = useState([
    "Wayanad Hills, Kerala",
    "Pangong Lake, Ladakh",
    "Tosh Valley, Himachal Pradesh",
    "Jaisalmer Desert, Rajasthan",
    "Coorg Coffee Estates, Karnataka",
    "Ananthagiri Hills, Telangana",
    "Munnar Hills, Kerala",
    "Manali Valley, Himachal Pradesh",
    "Spiti Valley, Himachal Pradesh",
    "Tada Falls, Andhra Pradesh",
    "Yercaud Hills, Tamil Nadu",
    "Chikmagalur, Karnataka",
  ]);

  const [showModal, setShowModal] = useState(false);
  const [placeName, setPlaceName] = useState("");
  const [location, setLocation] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [mapUrl, setMapUrl] = useState("");


const getLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const locString = `Lat: ${latitude}, Lng: ${longitude}`;
      setLocation(locString);

      const mapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
      setMapUrl(mapSrc);
    },
    (error) => {
      alert("Unable to fetch location");
      console.error(error);
    }
  );
};


  const handleModalSubmit = async () => {
    if (!placeName || !location || !imageFile || !isVerified) {
      alert("Please fill all fields and check verification.");
      return;
    }

    try {
      const newSpot = placeName; 
      setTentSpots([newSpot, ...tentSpots]);
      setShowModal(false);
      setPlaceName("");
      setLocation("");
      setImageFile(null);
      setIsVerified(false);
    } catch (error) {
      alert("Failed to add spot");
      console.error(error);
    }
  };

  const filteredSpots = tentSpots.filter((spot) =>
    spot.toLowerCase().includes(searchInput.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSpots.length / spotsPerPage);
  const indexOfLastSpot = currentPage * spotsPerPage;
  const indexOfFirstSpot = indexOfLastSpot - spotsPerPage;
  const currentSpots = filteredSpots.slice(indexOfFirstSpot, indexOfLastSpot);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="container tentcontainer2">
        <h3 className="tenttextheading">
          Add <span className="tentspottext">Tent Spot</span> Locations
        </h3>
        <p className="tenttextparagraph">
          Help fellow travelers by sharing your favorite camping spots.
        </p>

        <div className="row">
          <div className="tent-searchbar col-md-6">
            <input
              type="text"
              placeholder="Search Tent Spot"
              className="tent-input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="tent-add-btn">
              <img src={Searchicon} alt="searchicon" />
            </button>
          </div>

          <div className="tent-addbar col-md-6">
            <input
              type="text"
              placeholder="Add a Tent Spot"
              className="tent-input"
              value={tentInput}
              onChange={(e) => setTentInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setShowModal(true)}
            />
            <button className="tent-add-btn" onClick={() => setShowModal(true)}>
            Add a Tent Spot
            </button>
          </div>
        </div>

        <div className="tentlocations mt-4">
          {currentSpots.map((spot, index) => (
            <button key={index} className="location">
              <i className="bi bi-geo-alt-fill text-black"></i> {spot}
            </button>
          ))}
        </div>

        <div className="pagination-buttons mt-4 d-flex justify-content-center gap-2">
          <button
            className="btn btn-outline-secondary"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop ">
          <div className="modal-content tent-modal">
            <h5 className="modaltext">Add Tent Spot Details</h5>

            <input
              type="text"
              placeholder="Place Name"
              className="form-control mb-2"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
            />

            <div className="d-flex gap-2 mb-2">
              {mapUrl && (
  <div className="map-preview mb-3">
    <iframe
      title="map-preview"
      src={mapUrl}
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
)}

              <button className="btn btn-sm btn-secondary" onClick={getLocation}>
                Use My Location
              </button>
            </div>

            <input
              type="file"
              accept="image/*"
              className="form-control mb-2"
              onChange={(e) => setImageFile(e.target.files[0])}
            />

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={isVerified}
                onChange={() => setIsVerified(!isVerified)}
              />
              <label className="form-check-label">
                I verify this information is accurate
              </label>
            </div>

            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="btn btn-outline modalbtn" onClick={handleModalSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tent;

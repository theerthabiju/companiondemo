import React, { useEffect, useState } from 'react';
import '../../assets/css/sub-css/postnewride.css';
import { axiosInstance } from "../../util/AxiosInstance";

const Postnewride = () => {
  const initialState = {
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    seats: '',
    fare: '',
    rideNotes: '',
    model: '',
    numberPlate: '',
    color: '',
    vehicleNotes: '',
    driverName: '',
    phone: '',
    email: '',
    photo: null,
  };

  const [formData, setFormData] = useState(initialState);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!formData.pickup.trim() && !formData.dropoff.trim()) {
        setPickupSuggestions([]);
        setDropoffSuggestions([]);
        return;
      }

      try {
        const response = await axiosInstance.post("https://your-api.com/autocomplete", formData);
        setPickupSuggestions(Array.isArray(response.data.pickupSuggestions) ? response.data.pickupSuggestions : []);
        setDropoffSuggestions(Array.isArray(response.data.dropoffSuggestions) ? response.data.dropoffSuggestions : []);
      } catch (error) {
        console.error("Autocomplete error:", error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 500);
    return () => clearTimeout(debounce);
  }, [formData.pickup, formData.dropoff]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.pickup) newErrors.pickup = 'Pickup location is required.';
    if (!formData.dropoff) newErrors.dropoff = 'Drop-off location is required.';
    if (!formData.date) newErrors.date = 'Date is required.';
    if (!formData.time) newErrors.time = 'Time is required.';
    if (!formData.seats) newErrors.seats = 'Please select available seats.';
    if (!formData.fare || isNaN(formData.fare)) newErrors.fare = 'Fare must be a valid number.';
    if (!formData.model) newErrors.model = 'Vehicle model is required.';
    if (!formData.numberPlate) newErrors.numberPlate = 'Number plate is required.';
    if (!formData.color) newErrors.color = 'Vehicle color is required.';
    if (!formData.driverName) newErrors.driverName = 'Driver name is required.';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be a 10-digit number.';
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.photo) newErrors.photo = 'Driver photo is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const data = new FormData();
        for (let key in formData) {
          data.append(key, formData[key]);
          console.log(`${key} : ${formData[key]}`)
        }

        // await axiosInstance.post("https://your-api.com/postride", data);
        alert("Ride posted successfully! " + JSON.stringify(data));

        // Reset form
        setFormData(initialState);
        setPickupSuggestions([]);
        setDropoffSuggestions([]);
        setErrors({});
      } catch (error) {
        console.error("Submit error:", error);
        alert("Failed to post ride.");
      }
    }
  };

  return (
    <div className='container postnewridecontainer'>
      <h3 className='postridehead'>Create New Ride</h3>
      <span className='hrhead'><hr /></span>
      <h3 className='text-center newposthead mt-5 mb-3'>
        Start Your Journey <br />
        <span className='newpostheadhighlight'>Share a Ride, Build Connections</span>
      </h3>
      <p className='text-center mb-5 mt-0 newpostsubhead'>
        Provide accurate pickup and drop-off locations, along with the date and time of the journey.
        Specify the number of available seats and fare per seat. Don’t forget to add vehicle and driver details.
      </p>

      <div className="form-section">
        <form className="postride-form" onSubmit={handleSubmit}>
          <h3 className="form-section-header">Ride Information</h3>

          {/* Pickup */}
          <label>From (Pickup Location)</label>
          <input name="pickup" value={formData.pickup} onChange={handleChange} placeholder="Enter pickup location" />
          {pickupSuggestions.length > 0 && (
            <ul className="suggestions-list">
              {pickupSuggestions.map((sug, i) => (
                <li key={i} onClick={() => {
                  setFormData(prev => ({ ...prev, pickup: sug }));
                  setPickupSuggestions([]);
                }}>{sug}</li>
              ))}
            </ul>
          )}
          {errors.pickup && <small className="error">{errors.pickup}</small>}

          {/* Drop-off */}
          <label>To (Drop-off Location)</label>
          <input name="dropoff" value={formData.dropoff} onChange={handleChange} placeholder="Enter drop-off location" />
          {dropoffSuggestions.length > 0 && (
            <ul className="suggestions-list">
              {dropoffSuggestions.map((sug, i) => (
                <li key={i} onClick={() => {
                  setFormData(prev => ({ ...prev, dropoff: sug }));
                  setDropoffSuggestions([]);
                }}>{sug}</li>
              ))}
            </ul>
          )}
          {errors.dropoff && <small className="error">{errors.dropoff}</small>}

          {/* Date & Time */}
          <label>Date</label>
          <input name="date" type="date" value={formData.date} onChange={handleChange} />
          {errors.date && <small className="error">{errors.date}</small>}

          <label>Time</label>
          <input name="time" type="time" value={formData.time} onChange={handleChange} />
          {errors.time && <small className="error">{errors.time}</small>}

          {/* Seats & Fare */}
          <label>Available Seats</label>
          <select name="seats" value={formData.seats} onChange={handleChange}>
            <option value="">Select Seats</option>
            {[...Array(30)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          {errors.seats && <small className="error">{errors.seats}</small>}

          <label>Fare per Seat</label>
          <input name="fare" value={formData.fare} onChange={handleChange} placeholder="Enter fare" />
          {errors.fare && <small className="error">{errors.fare}</small>}

          <label>Additional Notes</label>
          <textarea name="rideNotes" value={formData.rideNotes} onChange={handleChange} placeholder="e.g. no pets, prefer quiet ride..." />

          <h3 className="form-section-header">Vehicle Information</h3>
          <label>Model</label>
          <input name="model" value={formData.model} onChange={handleChange} placeholder="Enter vehicle model" />
          {errors.model && <small className="error">{errors.model}</small>}

          <label>Number Plate</label>
          <input name="numberPlate" value={formData.numberPlate} onChange={handleChange} placeholder="Enter number plate" />
          {errors.numberPlate && <small className="error">{errors.numberPlate}</small>}

          <label>Vehicle Color</label>
          <input name="color" value={formData.color} onChange={handleChange} placeholder="Enter vehicle color" />
          {errors.color && <small className="error">{errors.color}</small>}

          <label>Additional Notes</label>
          <textarea name="vehicleNotes" value={formData.vehicleNotes} onChange={handleChange} placeholder="e.g. AC/non-AC, Petrol or Diesel ..." />

          <h3 className="form-section-header">Driver Details</h3>
          <label>Driver Name</label>
          <input name="driverName" value={formData.driverName} onChange={handleChange} placeholder="Enter driver name" />
          {errors.driverName && <small className="error">{errors.driverName}</small>}

          <label>Phone Number</label>
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
          {errors.phone && <small className="error">{errors.phone}</small>}

          <label>Email (optional)</label>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
          {errors.email && <small className="error">{errors.email}</small>}

          <label>Driver Photo</label>
          <input name="photo" type="file" accept="image/*" onChange={handleChange} />
          {errors.photo && <small className="error">{errors.photo}</small>}

          <button type="submit" className='btn btn-outline postridebtn'>POST RIDE</button>
        </form>
      </div>
    </div>
  );
};

export default Postnewride;

import React, { useState, useEffect } from 'react';
import { axiosInstance } from "../../util/AxiosInstance";
import '../../assets/css/sub-css/addcommunity.css';

const AddCommunity = () => {
  const initialState = {
    communityName: '',
    organizer: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [nameSuggestions, setNameSuggestions] = useState([]);
  const [organizerSuggestions, setOrganizerSuggestions] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!formData.communityName.trim() && !formData.organizer.trim()) {
        setNameSuggestions([]);
        setOrganizerSuggestions([]);
        return;
      }

      try {
        const response = await axiosInstance.post('https://your-api.com/community-autocomplete', {
          communityName: formData.communityName,
          organizer: formData.organizer,
        });

        setNameSuggestions(Array.isArray(response.data.communitySuggestions) ? response.data.communitySuggestions : []);
        setOrganizerSuggestions(Array.isArray(response.data.organizerSuggestions) ? response.data.organizerSuggestions : []);
      } catch (error) {
        console.error('Autocomplete error:', error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 500);
    return () => clearTimeout(debounce);
  }, [formData.communityName, formData.organizer]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.communityName) newErrors.communityName = 'Community name is required.';
    if (!formData.organizer) newErrors.organizer = 'Organizer name is required.';
    if (!formData.description) newErrors.description = 'Description is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Community created:\n' + JSON.stringify(formData, null, 2));
      setFormData(initialState);
      setNameSuggestions([]);
      setOrganizerSuggestions([]);
      setErrors({});
    }
  };

  return (
    <div className="container addcommunitycontainer">
      <div className="createcommunitydiv">
        <form className="postride-form" onSubmit={handleSubmit}>
          <h3 className="form-section-header">Create a Community</h3>

          <label>Community Name</label>
          <input
            name="communityName"
            value={formData.communityName}
            onChange={handleChange}
            placeholder="Enter community name"
          />
          {nameSuggestions.length > 0 && (
            <ul className="suggestions-list">
              {nameSuggestions.map((sug, i) => (
                <li key={i} onClick={() => {
                  setFormData(prev => ({ ...prev, communityName: sug }));
                  setNameSuggestions([]);
                }}>{sug}</li>
              ))}
            </ul>
          )}
          {errors.communityName && <small className="error">{errors.communityName}</small>}

          <label>Organizer Name</label>
          <input
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            placeholder="Enter organizer name"
          />
          {organizerSuggestions.length > 0 && (
            <ul className="suggestions-list">
              {organizerSuggestions.map((sug, i) => (
                <li key={i} onClick={() => {
                  setFormData(prev => ({ ...prev, organizer: sug }));
                  setOrganizerSuggestions([]);
                }}>{sug}</li>
              ))}
            </ul>
          )}
          {errors.organizer && <small className="error">{errors.organizer}</small>}

          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter community description"
          />
          {errors.description && <small className="error">{errors.description}</small>}

          <button type="submit" className="btn btn-outline postridebtn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AddCommunity;

import React, { useState } from 'react';
import { axiosInstance } from "../../util/AxiosInstance";
import '../../assets/css/sub-css/contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axiosInstance.post('https://your-api.com/contact-message', formData);
        console.log('Message sent:', response.data);

        setSubmitted(true);
        setFormData({ fullName: '', email: '', message: '' });
        setErrors({});
      } catch (error) {
        console.error('Send message error:', error);
        alert('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className='container contactcontainer'>
      <div className='contactrow text-center d-flex justify-content-center'>
        <div className='contactcol col-md-3'>
          <i className="bi bi-geo-alt-fill"></i>
          <p>7 Green Lake Street</p>
          <p>Crawfordsville, IN 47933</p>
        </div>
        <div className='contactcol col-md-3'>
          <i className="bi bi-envelope-fill"></i>
          <p>24/7 Support Team</p>
          <p>ready for supports.</p>
        </div>
        <div className='contactcol col-md-3'>
          <i className="bi bi-headset"></i>
          <p>example@gmail.com</p>
          <p>yourmail@gmail.com</p>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <form className="contact-form-card" onSubmit={handleSubmit}>
          <h2 className="contactform-title">Send a Message</h2>
          <div className="contactform-row">
            <div className="contactform-group">
              <label>Full Name*</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Your Full Name ........"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>
            <div className="contactform-group">
              <label>Mail ID*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your E-Mail ........"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
          </div>
          <div className="contactform-group full-width">
            <label>Message*</label>
            <textarea
              name="message"
              placeholder="Enter Your Message ........"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>
          <button type="submit" className="contactformsubmit-btn">Send Message</button>
          {submitted && (
            <p style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

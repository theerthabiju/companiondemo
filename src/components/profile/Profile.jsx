import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/profile/profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  const [profileImage, setProfileImage] = useState(null);
  const [tempImage, setTempImage] = useState(null);
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState('THEERTHA BIJU');
  const [email, setEmail] = useState('thheedoe@gmail.com');
  const [phone, setPhone] = useState('+91 9000060010');

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('user'); // Assume user key indicates login
    if (!isUserLoggedIn) {
      navigate('/signup'); // Redirect to sign up if no user
      return;
    }

    const savedImage = localStorage.getItem('profileImage');
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');

    if (savedImage) setProfileImage(savedImage);
    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
  }, [navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setTempImage(imageURL);
    }
  };

  const handleImageSave = () => {
    setProfileImage(tempImage);
    localStorage.setItem('profileImage', tempImage);
    setTempImage(null);
  };

  const handleProfileSave = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    setEditing(false);
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear all data including 'user'
    navigate('/login'); // Redirect to login
  };

  const renderSection = () => {
    if (activeTab === 'account') {
      return (
        <div className="profile-content-card">
          <h2>Personal Information</h2>
          {editing ? (
            <>
              <div className="form-group mb-2">
                <label><strong>Name:</strong></label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group mb-2">
                <label><strong>Email:</strong></label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group mb-2">
                <label><strong>Phone:</strong></label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <button className="save-btn" onClick={handleProfileSave}>Save</button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <button className="profile-edit-btn mt-2" onClick={() => setEditing(true)}>Edit Info</button>
            </>
          )}
        </div>
      );
    }

    if (activeTab === 'Posts') {
      return (
        <div className="profile-content-card">
          <h2>Your Posts</h2>
          <p>No Post yet</p>
        </div>
      );
    }

    if (activeTab === 'Rides') {
      return (
        <div className="profile-content-card">
          <h2>Your Rides</h2>
          <p>No rides.</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="container profilecontainer">
      <div className="profile-wrapper">
        <div className="profile-sidebar">
          <h3>My Account</h3>
          <ul>
            <li onClick={() => setActiveTab('account')} className={activeTab === 'account' ? 'active' : ''}>Profile Info</li>
            <li onClick={() => setActiveTab('Posts')} className={activeTab === 'Posts' ? 'active' : ''}>My Posts</li>
            <li onClick={() => setActiveTab('Rides')} className={activeTab === 'Rides' ? 'active' : ''}>Rides</li>
            <li className="logout-btn mt-4" onClick={handleLogout} style={{ color: '#0587bb', cursor: 'pointer' }}>
              Logout
            </li>
          </ul>
        </div>

        <div className="profile-content">
          <div className="profile-image-wrapper">
            <label htmlFor="profileImageUpload" className="edit-icon">
              <img
                src={tempImage || profileImage || '/default-avatar.png'}
                alt="Profile"
                className="profile-image"
              />
              <span className="edit-icon-overlay"><i className="bi bi-pencil-fill"></i></span>
            </label>
            <input
              id="profileImageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            {tempImage && (
              <button className="save-btn" onClick={handleImageSave}>Save</button>
            )}
          </div>
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Profile;

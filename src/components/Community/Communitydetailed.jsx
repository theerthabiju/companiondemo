import React, { useState } from 'react';
import Slider from 'react-slick';
import '../../assets/css/sub-css/community.css';
import '../../assets/css/sub-css/communitydetailed.css';
import filter4 from "../../assets/images/filter4.png";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import uploadphoto1 from "../../assets/images/uploadphoto1.png";
import uploadphoto2 from "../../assets/images/uploadphoto2.png";
import uploadphoto3 from "../../assets/images/uploadphoto3.png";
import uploadphoto4 from "../../assets/images/uploadphoto4.png";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Communitydetailed = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [members, setMembers] = useState([
    { name: 'Rajeev', isAdmin: true, img: profile1 },
    { name: 'Makhesh', isAdmin: true, img: profile2 },
    { name: 'Manu', isAdmin: false, img: profile1 },
    { name: 'Sumi', isAdmin: false, img: profile2 },
    { name: 'Sharon', isAdmin: false, img: profile1 },
    { name: 'Jaseem', isAdmin: false, img: profile2 },
    { name: 'Sruthi', isAdmin: false, img: profile1 }
  ]);

  const [galleryData, setGalleryData] = useState([
    { src: uploadphoto1, name: 'Shyam' },
    { src: uploadphoto2, name: 'Theertha' },
    { src: uploadphoto3, name: 'Sumi' },
    { src: uploadphoto4, name: 'Hashim' },
  ]);

  const [upload, setUpload] = useState({ file: null, name: '' });

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddMember = () => {
    if (newMemberName.trim() === '') return;
    setMembers([...members, { name: newMemberName.trim(), isAdmin: false, img: profile1 }]);
    setNewMemberName('');
    setShowAddForm(false);
  };

  const handleFileChange = (e) => {
    setUpload({ ...upload, file: e.target.files[0] });
  };

  const handleNameChange = (e) => {
    setUpload({ ...upload, name: e.target.value });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!upload.file || !upload.name) {
      alert('Please select a photo and enter your name');
      return;
    }

    const newPhoto = {
      src: URL.createObjectURL(upload.file),
      name: upload.name
    };

    setGalleryData(prev => [newPhoto, ...prev]);
    setUpload({ file: null, name: '' });
    document.getElementById('uploadFileInput').value = '';
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className='container communitydetailedcontainer'>
      {/* Upcoming Ride Plans Header */}
      <div className='row upcominghead'>
        <h3 className='col-md-6 upcominghead1'>Upcoming Ride Plans</h3>
        <h3 className='col-md-6 upcominghead2 text-end'>Members</h3>
      </div>
      <span className='hrhead'><hr /></span>

      <div className='row communityrow'>
        {/* Ride Plan Cards (Example Card Repeated) */}
        {[...Array(2)].map((_, i) => (
          <div className='col-md-4' key={i}>
            <div className="communitycard">
              <img className="upcomingcard-img" src={filter4} alt="Destination" />
              <div className="upcomingcardoverlay">
                <div className="upcomingcard-info">
                  <span className="upcomingcardride-route text-center">Kalpetta → Bangalore</span>
                </div>
              </div>
              <div className="card-body communitycardbody">
                <div className='upcomingtext row d-flex'>
                  <div className='col-md-6'>
                    <p><i className="bi bi-calendar4"></i> 20/9/2025</p>
                    <p>Driver: Thunder Riders</p>
                  </div>
                  <div className='col-md-6 text-end'>
                    <p>Seats Available: 1</p>
                    <p>Classic 350 Matt Scale Model 1:12 Dark Stealth Black</p>
                  </div>
                  <hr />
                </div>
                <div className='upcomingtext row d-flex'>
                  <div className='col-md-6'><p className="upcomingmail">example@gmail.com</p></div>
                  <div className='col-md-6 text-end'><p className="upcomingnumber">91 966 9966 996</p></div>
                </div>
              </div>
              <button className="btn btn-outline communitycardbtn">Join/Request to Join</button>
            </div>
          </div>
        ))}

        {/* Members Section */}
        <div className='col-md-1'></div>
        <div className='col-md-3 justify-content-end'>
          <div className='row chatrow justify-content-between'>
            <div className='col-md-12 text-end d-flex align-items-center justify-content-end mb-4'>
              {showSearch && (
                <input
                  type='text'
                  className='membersearch form-control form-control-sm me-2'
                  placeholder='Search members...'
                  style={{ width: '100%', fontSize: '12px' }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              )}
              <i
                className="bi bi-search"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowSearch(!showSearch)}
              ></i>
            </div>
            <hr />
          </div>

          {/* Add Member Form */}
          <div className='addmember mb-1'>
            <button className='btn btn-outline' onClick={() => setShowAddForm(!showAddForm)}>
              <i className="bi bi-person-fill-add"></i> {showAddForm ? 'Cancel' : 'Add Members'}
            </button>
            <p className='totalmember'>Total Members: {members.length}</p>
            {showAddForm && (
              <div className='mt-2 d-flex'>
                <input
                  type='text'
                  className='form-control form-control-sm me-2'
                  placeholder='Enter member name'
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                />
                <button className='btn btn-sm btn-outline memberaddbtn text-white' onClick={handleAddMember}>
                  Add
                </button>
              </div>
            )}
          </div>

          {/* Filtered Members List */}
          <div className='row membersrow'>
            <ul className='memberlist list-unstyled'>
              <div className='row listrow'>
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member, index) => (
                    <React.Fragment key={index}>
                      <li className='col-md-6 d-flex align-items-center mb-2'>
                        <img src={member.img} alt="profile" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }} />
                        {member.name}
                      </li>
                      <li className='col text-end mb-2'>
                        {member.isAdmin ? 'Admin' : ''}
                      </li>
                    </React.Fragment>
                  ))
                ) : (
                  <p className='text-muted'>No members found</p>
                )}
              </div>
            </ul>
            <p className='leadmore'>Others...</p>
          </div>
        </div>
      </div>

      {/* Connect With Us */}
      <div className='row upcomingheadrow2'>
        <h3 className='col-md-12 text-start upcominghead1 mt-5'>Connect With Us</h3>
        <span className='hrhead'><hr /></span>
        <p>Join discussions, share content, and grow the Bullet Club community</p>
        <p className='bulletsocialmedias'>
          <a href="#">Discord |</a> <a href="#"> Twitter |</a> <a href="#">Instagram |</a> <a href="#">Reddit</a>
        </p>
      </div>

     

      {/* Photo Gallery */}
      <div className='galleryheadrow row'>    
        <h3 className='col-md-12 text-start upcominghead1 mt-5'>Recent Trip Photos</h3>
        <span className='hrhead'><hr /></span>
         {/* Upload Photo Section */}
      <div className='row mt-5'>
        <div className='col-md-12'>
          <h4 className="text-start upcominghead12 ">Upload a New Trip Photo</h4>
          <form className="d-flex flex-column flex-md-row gap-3 align-items-start" onSubmit={handleUpload}>
            <input
              type="file"
              id="uploadFileInput"
              accept="image/*"
              className="form-control w-auto"
              onChange={handleFileChange}
            />
            <input
              type="text"
              className="form-control w-auto"
              placeholder="Your name"
              value={upload.name}
              onChange={handleNameChange}
            />
            <button className="btn btn-outline uploadphotobtn" type="submit">Upload</button>
          </form>
        </div>
      </div>
        <div className='galleryheadrow2 mt-5'>
          <Slider {...settings}>
            {galleryData.map((item, idx) => (
              <div key={idx} className='galleryimgcol px-2'>
                <div className='galleryimgcard card'>
                  <img className='galleryimg img-fluid' src={item.src} alt='gallery photos' />
                </div>
                <div className='text-center'>
                  <p className='uploadername mb-0 mt-2'>Uploaded By : {item.name}</p>
                  <p className='uploaderdate mb-0'>Mar 09 2025</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Communitydetailed;

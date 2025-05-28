import React, { useEffect, useRef, useState }  from 'react';
import "../../assets/css/whychoose.css";
import whychoose from "../../assets/images/whychoose.png";
import year from "../../assets/images/year.png";
import AOS from 'aos';


 


const Whychoose = () => {
   const imageRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
  }, []);
  return (
    <div className="container whychooseuscontainer">
  <div className="row whychooserow align-items-center">
    <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0 whychoosecol1">
      <img
        src={whychoose}
        alt="whychoose"
        ref={imageRef}
        className={`img-fluid image-slide-in ${visible ? 'visible' : ''}`}
      />
    </div>
    <div className="col-12 col-lg-6 whychoosecol2">
      <div className="whychoosetext mb-3">
        <button className="btn btn-outline">WHY CHOOSE US</button>
      </div>
      <h3 className="whychoosetext2">
        Experience Your <br /> Journey With Us
      </h3>
      <p className="whychoosetext3 mb-4">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
      </p>

      <div className="mb-3">
        <div className="d-flex justify-content-between progresstextrow">
          <span>Experience</span>
          <span>90%</span>
        </div>
        <div className="progress progressbar1">
          <div className="progress-bar" style={{ width: '90%' }}></div>
        </div>
      </div>

      <div className="mb-4">
        <div className="d-flex justify-content-between progresstextrow">
          <span>Success Rate</span>
          <span>96%</span>
        </div>
        <div className="progress progressbar2">
          <div className="progress-bar" style={{ width: '96%' }}></div>
        </div>
      </div>

      <div className="row verticalrow mb-4 d-flex align-items-center">
        <div className="col-8 d-flex align-items-center">
          <span className="vertical-text me-2">EXPERIENCE<br />SINCE YEAR</span>
          <img className="yearimg" src={year} alt="2025year" />
        </div>
      </div>

      <div className="DiscoverMorebtn">
        <button className="btn btn-outline">
          <a href="#">Discover More</a>
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Whychoose;

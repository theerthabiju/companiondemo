
import React, { useEffect, useRef } from 'react';
import "../../assets/css/testimonial.css";
import profile from "../../assets/images/profile.png";

const Testimonial = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
  }, []);

  return (
    <section>
      <div className='testimonialsection kenburns-bottom '>
        <div className='container testimonialcontainer'>
          <button className='btn btn-outline testimonialbtn'>
            TESTIMONIALS
          </button>
          <h3 className='testimonialtext1 focus-in-expand 
 text-start'>
            Unforgettable <br />
            Travel Experiences
          </h3>
          <p className='testimonialtext2'>
            Our customer's feedback is essential in building a great reputation and maintaining excellent service.
            <br />
            By listening to our customer's needs, we can improve our offerings and provide an exceptional travel experience.
          </p>

          <div className="row testimonialrow">
            <div className="testimonialcol col-sm-6 mb-3 mb-sm-0">
              <div
                className="card testimonialcard hidden"
                ref={el => (cardsRef.current[0] = el)}
              >
                <div className="card-body testimonialbody">
                  <p className="card-text testimonialtext">
                    Our customer's feedback is essential in building a great reputation
                    and maintaining excellent service.
                  </p>
                  <div>
                    <img src={profile} alt="profile" /> <span className='profilename'>Jennifer</span>
                    <p className='testimonialcommunityname'>Wander Women Riders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonialcol col-sm-6">
              <div
                className="card testimonialcard hidden"
                ref={el => (cardsRef.current[1] = el)}
              >
                <div className="card-body testimonialbody">
                  <p className="card-text testimonialtext">
                    Our customer's feedback is essential in building a great reputation
                    and maintaining excellent service.
                  </p>
                  <div>
                    <img src={profile} alt="profile" /> <span className='profilename'>Jennifer</span>
                    <p className='testimonialcommunityname'>Wander Women Riders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;

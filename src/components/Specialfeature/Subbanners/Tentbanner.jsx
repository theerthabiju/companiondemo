import React from 'react';
import '../../../assets/css/specialfeature/tent.css';
import { useLocation } from 'react-router-dom';
import aboutus from "../../../assets/images/aboutus.png";
import postridebg from "../../../assets/images/postridebg.png";
import ridebg from "../../../assets/images/ridebg.png";


const Tentbanner = () => {
 const location = useLocation();
let current = { heading: "Default Page", breadcrumb: "Current" , Image:"Current-img"};

console.log('Location:- ' + location.pathname)

if (location.pathname.startsWith("/companion/tent")) {
  current = { heading: "Tent Spot", breadcrumb: "Tent Spot", Image: aboutus };
} else if (location.pathname.startsWith("/companion/midwayjoin")) {
  current = { heading: "Mid-Way Join", breadcrumb: "Mid-way", Image: aboutus };
} else if (location.pathname.startsWith("/companion/addviewpoints")) {
  current = { heading: "View Points", breadcrumb: "View-Point", Image: aboutus };
} else if (location.pathname.startsWith("/companion/localevents")) {
  current = { heading: "Events", breadcrumb: "Events", Image: ridebg };
} else if (location.pathname.startsWith("/companion/aboutus")) {
  current = { heading: "About Us", breadcrumb: "About Us", Image: postridebg };
}
else if (location.pathname.startsWith("/companion/exploreride")) {
  current = { heading: "Explore Ride", breadcrumb: "Rides", Image: ridebg };
}
else if (location.pathname.startsWith("/companion/postnewride")) {
  current = { heading: "Post a New Ride", breadcrumb: "New ride", Image: postridebg};
}

  return (
<section
  className="tentbannercontainer"
style={{ backgroundImage: `url(${current.Image})` }}>

      <div className='tentbanneroverlay'>
        <h2 className='tentbannerhead'>{current.heading}</h2>
        
        <nav aria-label="breadcrumb" className="breadcrumbnav">
          <ol className="breadcrumblist">
            <li className="breadcrumbitem">
              <a href="/">Home</a>
            </li><i className="bi bi-arrows breadcrumbarrow"></i> 
            <li className="breadcrumbitem">
              <a href={location.pathname}>{current.breadcrumb}</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Tentbanner;




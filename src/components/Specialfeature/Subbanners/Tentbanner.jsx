import React from 'react';
import '../../../assets/css/specialfeature/tent.css';
import { useLocation } from 'react-router-dom';
import postridebg from "../../../assets/images/postridebg.png";
import ridebg from "../../../assets/images/ridebg.png";
import communitybg from "../../../assets/images/communitybg.png";
import bulletclubbg from "../../../assets/images/bulletclubbg.png";
import midwaybg from "../../../assets/images/midwaybg.png";
import tentbg from "../../../assets/images/tentbg.png";
import viewpointbg from "../../../assets/images/viewpointbg.png";
import localeventbg from "../../../assets/images/localeventbg.png";
import blogbg from "../../../assets/images/blogbg.png";
import blogbg2 from "../../../assets/images/blogbg2.png";
import addcommunity from "../../../assets/images/addcommunity.png";
import contactusbg from "../../../assets/images/contactusbg.png";










const Tentbanner = () => {
 const location = useLocation();
let current = { heading: "Default Page", breadcrumb: "Current" , Image:"Current-img" ,Sub:"sub-content"};

console.log('Location:- ' + location.pathname)

if (location.pathname.startsWith("/companion/tent")) {
  current = { heading: "Tent Spot", breadcrumb: "Tent Spot", Image: tentbg };
} else if (location.pathname.startsWith("/companion/midwayjoin")) {
  current = { heading: "Mid-Way Join", breadcrumb: "Mid-way", Image: midwaybg };
} else if (location.pathname.startsWith("/companion/addviewpoints")) {
  current = { heading: "View Points", breadcrumb: "View-Point", Image: viewpointbg };
} else if (location.pathname.startsWith("/companion/localevents")) {
  current = { heading: "Events", breadcrumb: "Events", Image: localeventbg };
} else if (location.pathname.startsWith("/companion/aboutus")) {
  current = { heading: "About Us", breadcrumb: "About Us", Image: postridebg };
}
else if (location.pathname.startsWith("/companion/exploreride")) {
  current = { heading: "Explore Ride", breadcrumb: "Rides", Image: ridebg };
}
else if (location.pathname.startsWith("/companion/postnewride")) {
  current = { heading: "Post a New Ride", breadcrumb: "New ride", Image: postridebg};
}
else if (location.pathname.startsWith("/companion/community")) {
  current = { heading: "Community", breadcrumb: "Community", Image: communitybg};
}
else if (location.pathname.startsWith("/companion/bulletclub")) {
  current = { heading: "Bullet Club Community", Sub:"Location : Calicut | Total Members: 1359 " ,breadcrumb: "Bullet Club", Image: bulletclubbg};
}
else if (location.pathname.startsWith("/companion/add-community")) {
  current = { heading: "Add Community" ,breadcrumb: "Add community", Image: addcommunity};
}
else if (location.pathname.startsWith("/companion/Blogs")) {
  current = { heading: "Stories/Blogs" ,breadcrumb: "Stories/Blogs", Image: blogbg};
}
else if (location.pathname.startsWith("/companion/blogone")) {
  current = { heading: "blogname" ,breadcrumb: "blogs", Image: blogbg2};
}
else if (location.pathname.startsWith("/companion/Contact")) {
  current = { heading: "Contact Us" ,breadcrumb: "Contact Us", Image: contactusbg};
}

  return (
<section
  className="tentbannercontainer img-fluid"
style={{ backgroundImage: `url(${current.Image})` }}>

      <div className='tentbanneroverlay'>
        <div className='headandsubheadbanner'>
          <h2 className='tentbannerhead'>{current.heading}</h2>
        <p className='currentsub'> {current.Sub}</p>
        </div>
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




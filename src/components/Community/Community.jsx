import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../assets/css/sub-css/community.css'
import filter4 from "../../assets/images/filter4.png"
import cc5 from "../../assets/images/cc5.png"
import cc6 from "../../assets/images/cc6.png"
import cc7 from "../../assets/images/cc7.png"
import cc8 from "../../assets/images/cc8.png"
import cc9 from "../../assets/images/cc9.png"
import star from "../../assets/images/star.png"





const Community = () => {
    const navigate = useNavigate();

  return (
    <div className='communitypagecontainer container'>
  <h3 className="communityhead">Travel Community</h3>
      <span className="hrhead"><hr /></span>
<div className='communityheadandsubhead slide-down'>
  <h3 className='communitytext mt-5 text-center'>
    Join Our Travel Community , <br />
    <span className='communitymarkedtext'>Find Your Perfect Road Companion</span>
  </h3>
  <p className='text-center'>
    Our travel community helps you connect with like-minded explorers looking to share routes, stories, and unforgettable experiences.
  </p>
</div>


     
        <div className='row communityrow'>
<div className='col-md-4'>
   <div className="communitycard">
<img className="communitycard-img" src={filter4} alt="Destination" />
  <div className="communitycardoverlay">
    <div className="communitycard-info">
      <span className="communitycardride-route text-center">Bullet Clubs</span>
      <div className='text-center'>
      <img className='ratingstar' src={star} alt="star" /> 
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img  className='ratingstar' src={star} alt="star" />
      </div>
    </div>
  </div>
  <div className="card-body communitycardbody">
   <div className='subcommunitytext'>
     <p>Organizer: Thunder Riders</p>
    <p>Seats Available: 10</p>
    <hr />
    </div>
    <ul>
<li className="upcomingplans"> <i class="bi bi-calendar3 "></i> Upcoming ride plans</li>
    <li className="recentphotos">
    <i class="bi bi-images"></i>  Recent trip photos
    </li>
    </ul>
    
  </div>
<Link  className="btn btn-outline communitycardbtn "  to="/companion/bulletclub">
                    Join/Request to Join
                  </Link>
</div>
</div>

<div className='col-md-4'>
   <div className="communitycard">
<img className="communitycard-img" src={cc5} alt="Destination" />
  <div className="communitycardoverlay">
    <div className="communitycard-info">
      <span className="communitycardride-route">Backpackers</span>
      <div className='text-center'>
      <img className='ratingstar' src={star} alt="star" /> 
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img  className='ratingstar' src={star} alt="star" />
      </div>
    </div>
  </div>
  <div className="card-body communitycardbody">
   <div className='subcommunitytext'>
     <p>Organizer: Nomad Walkers</p>
    <p>Seats Available: 10</p>
    <hr />
    </div>
    <ul>
<li className="upcomingplans"> <i class="bi bi-calendar3 "></i> Upcoming ride plans</li>
    <li className="recentphotos">
    <i class="bi bi-images"></i>  Recent trip photos
    </li>
    </ul>
    
  </div>
  <button className="btn btn-outline communitycardbtn">Join/Request to Join</button>
</div>
</div>

<div className='col-md-4'>
   <div className="communitycard">
<img className="communitycard-img" src={cc6} alt="Destination" />
  <div className="communitycardoverlay">
    <div className="communitycard-info">
      <span className="communitycardride-route">Wander Women Rides</span>
      <div className='text-center'>
      <img className='ratingstar' src={star} alt="star" /> 
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img  className='ratingstar' src={star} alt="star" />
      </div>
    </div>
  </div>
  <div className="card-body communitycardbody">
   <div className='subcommunitytext'>
     <p>Organizer: Thunder Riders</p>
    <p>Seats Available: 10</p>
    <hr />
    </div>
    <ul>
<li className="upcomingplans"> <i class="bi bi-calendar3 "></i> Upcoming ride plans</li>
    <li className="recentphotos">
    <i class="bi bi-images"></i>  Recent trip photos
    </li>
    </ul>
    
  </div>
  <button className="btn btn-outline communitycardbtn">Join/Request to Join</button>
</div>
</div>
        </div>


         <div className='row communityrow'>
<div className='col-md-4'>
   <div className="communitycard">
<img className="communitycard-img" src={cc7} alt="Destination" />
  <div className="communitycardoverlay">
    <div className="communitycard-info">
      <span className="communitycardride-route text-center">Bus Tribes</span>
      <div className='text-center'>
      <img className='ratingstar' src={star} alt="star" /> 
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img  className='ratingstar' src={star} alt="star" />
      </div>
    </div>
  </div>
  <div className="card-body communitycardbody">
   <div className='subcommunitytext'>
     <p>Organizer: RoadBuzz</p>
    <p>Seats Available: 10</p>
    <hr />
    </div>
    <ul>
<li className="upcomingplans"> <i class="bi bi-calendar3 "></i> Upcoming ride plans</li>
    <li className="recentphotos">
    <i class="bi bi-images"></i>  Recent trip photos
    </li>
    </ul>
    
  </div>
  <button className="btn btn-outline communitycardbtn">Join/Request to Join</button>
</div>
</div>

<div className='col-md-4'>
   <div className="communitycard">
<img className="communitycard-img" src={cc8} alt="Destination" />
  <div className="communitycardoverlay">
    <div className="communitycard-info">
      <span className="communitycardride-route">Campus Cruisers</span>
      <div className='text-center'>
      <img className='ratingstar' src={star} alt="star" /> 
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img  className='ratingstar' src={star} alt="star" />
      </div>
    </div>
  </div>
  <div className="card-body communitycardbody">
   <div className='subcommunitytext'>
     <p>Organizer: Nomad Walkers</p>
    <p>Seats Available: 10</p>
    <hr />
    </div>
    <ul>
<li className="upcomingplans"> <i class="bi bi-calendar3 "></i> Upcoming ride plans</li>
    <li className="recentphotos">
    <i class="bi bi-images"></i>  Recent trip photos
    </li>
    </ul>
    
  </div>
  <button className="btn btn-outline communitycardbtn">Join/Request to Join</button>
</div>
</div>

<div className='col-md-4'>
   <div className="communitycard">
<img className="communitycard-img" src={cc9} alt="Destination" />
  <div className="communitycardoverlay">
    <div className="communitycard-info">
      <span className="communitycardride-route">Off-Roaders</span>
      <div className='text-center'>
      <img className='ratingstar' src={star} alt="star" /> 
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img className='ratingstar' src={star} alt="star" />
      <img  className='ratingstar' src={star} alt="star" />
      </div>
    </div>
  </div>
  <div className="card-body communitycardbody">
   <div className='subcommunitytext'>
     <p>Organizer: Thunder Riders</p>
    <p>Seats Available: 10</p>
    <hr />
    </div>
    <ul>
<li className="upcomingplans"> <i class="bi bi-calendar3 "></i> Upcoming ride plans</li>
    <li className="recentphotos">
    <i class="bi bi-images"></i>  Recent trip photos
    </li>
    </ul>
    
  </div>
  <button className="btn btn-outline communitycardbtn">Join/Request to Join</button>
</div>
</div>
        </div>
   

    </div>
  )
}

export default Community

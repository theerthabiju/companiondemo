import React from 'react'
import "../../assets/css/cardhome.css" ;
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card5 from "../../assets/images/card5.png";
import card6 from "../../assets/images/card6.png";
import card7 from "../../assets/images/card7.png";




const Card = () => {
  return (
<div className='container findridecontainer'>
  <h3 className='text-center mb-5 cardtexthead'>WHY WE THE BEST TRAVEL <br /> <span className='cardmarkedtext'>COMPANION ! </span> </h3>
    <div className='row findriderow'>
    <div className='col-md-4 findridecol justify-content-center flex-wrap d-flex'>
 <div className="card  findridecard">
  <img src={card1} className="card-img-top" alt="findrideeaslyimg"/>
  <div className='card-overlay findrideoverlay'>
<p className='rewards-p'>Find Rides Easily</p>
  </div>
  <div>
<ul className='findridelist'>
    <li>
 
<i class="bi bi-check"></i>Search by location, date & ride type
</li>
    <li>
    
 <i class="bi bi-check"></i>Filter rides by car, bike, or bus
</li>
    <li>
 
 <i class="bi bi-check"></i>View available seats instantly
</li>

</ul>
  </div>
<a href="#" className="btn btn-outline Gosomewherebtn"></a>
 
</div>
</div>
 {/* ------------ */}
    <div className='col-md-4 findridecol justify-content-center flex-wrap d-flex'>
 <div className="card  findridecard">
  <img src={card2}className="card-img-top" alt="findrideeaslyimg"/>
  <div className='card-overlay findrideoverlay'>
<p className='rewards-p '>Create  Ride</p>
  </div>
  <div>
<ul className='findridelist'>
    <li>
<i class="bi bi-check"></i> Post rides with custom details
</li>
    <li>
 <i class="bi bi-check"></i>Manage seats & approve join requests
</li>
    <li>
<i class="bi bi-check"></i> Share ride link with friends or groups</li>
</ul>
  </div>
<a href="#" className="btn btn-outline Gosomewherebtn"></a>
 
</div>
</div>
{/* ------------- */}
   <div className='col-md-4 findridecol justify-content-center flex-wrap d-flex'>
 <div className="card  findridecard">
  <img src={card3}className="card-img-top" alt="findrideeaslyimg"/>
  <div className='card-overlay findrideoverlay'>
<p className='rewards-p '>Communication</p>
  </div>
  <div>
<ul className='findridelist'>
    <li>
 <i class="bi bi-check"></i>Chat with ride members before the trip
</li>
    <li>
<i class="bi bi-check"></i>Create ride-specific group discussions
</li>
    <li>
<i class="bi bi-check"></i>Stay updated with real-time messages</li>
</ul>
  </div>
<a href="#" className="btn btn-outline Gosomewherebtn"></a>
 
</div>
</div>
{/* ---------- */}
    </div>

    {/* second row----------------------------------------------------------- */}


     <div className='row findriderow2'>
    <div className='col-md-4 findridecol justify-content-center flex-wrap d-flex'>
 <div className="card  findridecard">
  <img src={card5}className="card-img-top" alt="findrideeaslyimg"/>
  <div className='card-overlay findrideoverlay'>
<p className='rewards-p '>Verified Community</p>
  </div>
  <div>
<ul className='findridelist'>
    <li>
 <i class="bi bi-check"></i>Trusted users with badge verification
</li>
    <li>
<i class="bi bi-check"></i>Hosts larger planned group rides
</li>
    <li>
 <i class="bi bi-check"></i>Build your own rider fanbase</li>
</ul>
  </div>
<a href="#" className="btn btn-outline Gosomewherebtn"></a>
 
</div>
</div>
 {/* ------------ */}
    <div className='col-md-4 findridecol justify-content-center flex-wrap d-flex'>
 <div className="card  findridecard">
  <img src={card6}className="card-img-top" alt="findrideeaslyimg"/>
  <div className='card-overlay findrideoverlay'>
<p className='rewards-p '>Review System</p>
  </div>
  <div>
<ul className='findridelist'>
    <li>
<i class="bi bi-check"></i>Build your own rider fanbase
</li>
    <li>
<i class="bi bi-check"></i>View rider/driver feedback and history
</li>
    <li>
<i class="bi bi-check"></i>Keep the community transparent & safe</li>
</ul>
  </div>
<a href="#" className="btn btn-outline Gosomewherebtn"></a>
 
</div>
</div>
{/* ------------- */}
   <div className='col-md-4 findridecol justify-content-center flex-wrap d-flex'>
 <div className="card  findridecard">
  <img src={card7}className="card-img-top" alt="findrideeaslyimg"/>
  <div className='card-overlay findrideoverlay'>
<p className='rewards-p'>Rewards </p>
  </div>
  <div>
<ul className='findridelist'>
    <li>
<i class="bi bi-check"></i>Earn points for rides & activity
</li>
    <li>
<i class="bi bi-check"></i>Redeem rewards like badges or upgrades
</li>
    <li>
<i class="bi bi-check"></i>Rise on the leaderboard, get featured</li>
</ul>
  </div>
<a href="#" className="btn btn-outline Gosomewherebtn"></a>
 
</div>
</div>
{/* ---------- */}

    </div>
</div>
  
   
  

 

 

  
  )
}

export default Card

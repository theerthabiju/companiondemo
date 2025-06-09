import React from 'react'
import "../../assets/css/plans.css";
import Tick from "../../assets/images/Tick.png";
import Close from "../../assets/images/Close.png";
import Star from "../../assets/images/Star.png";




const Plans = () => {
  return (
    <section className='planssection'>
           <div className='container planscontainer'>
      <h3 className='planhead text-center'>OUR INVESTMENT PLANS </h3>
      <p className='plansub'>Companion provides a straightforward and transparent mechanism to attract investments and <br /> make more profits</p>
<div className='plancards row'>
    <div className='col-md-4'>
        
<div className='card plancard '>  
<div className='card-title plancard-title'>
BASIC PLAN
</div>
  <div className="plan-rate-circle">RS.299/-</div>

<div className='card-body plancardbody'>
  
    <ul className='text-start'>
        <li> <img src={Tick}alt="Tick"/> Search & join public rides</li>
        <hr />
        <li><img src={Tick}alt="Tick"/> Create 1 ride/month</li>
        <hr />
        <li><img src={Tick}alt="Tick"/> View limited rider profiles</li>
        <hr />
        <li><img src={Tick}alt="Tick"/> Join 1 ride community</li>
        <hr />
        <li><img src={Tick}alt="Tick"/> Basic chat access</li>
        <hr />
        <li><img src={Close}alt="Close"/> No ride reviews posting</li>
        <hr />
        <li><img src={Close}alt="Close"/> No priority ride listing</li>
    </ul>

<div className="d-flex justify-content-center">
  <button className='btn btn-outline buynowbtn'>BUY NOW</button>
</div>
</div>
</div>
    </div>



<div className='col-md-4 '>
<div className='card plancard  '>
<div className='card-title plancard-title'>
STANDARD PLAN
</div>
  <div className="plan-rate-circle">RS.599/-</div>

<div className='card-body plancardbody'>
<ul className='text-start'>
        <li><img src={Tick}alt="Tick" />Unlimited ride joining</li>
         <hr />
        <li><img src={Tick}alt="Tick" />Create up to 5 rides/month</li>
         <hr />
        <li><img src={Tick}alt="Tick" />View full rider profiles</li>
         <hr />
        <li><img src={Tick}alt="Tick" />Join up to 5 ride communities</li>
         <hr />
        <li><img src={Tick}alt="Tick" />Group chat + ride updates</li>
         <hr />
        <li><img src={Tick}alt="Tick" />Post & read ride reviews</li>
         <hr />
        <li><img src={Close}alt="Close" />No featured listing</li>

    </ul>
<div className="d-flex justify-content-center">
  <button className='btn btn-outline buynowbtn'>BUY NOW</button>
</div></div>
</div>
</div>
<div className='col-md-4'>
<div className='card plancard '>
<div className='card-title plancard-title'>
PREMIUM PLAN
</div>
  <div className="plan-rate-circle">RS.999/-</div>

<div className='card-body plancardbody'>
<ul className='text-start'>
        <li><img src={Star}alt="Star" />Unlimited everything</li>
        <hr />
        <li><img src={Tick}alt="Tick" />Priority support</li>
        <hr />
        <li><img src={Tick}alt="Tick" />Featured ride listings</li>
        <hr />
        <li><img src={Tick}alt="Tick" />Verified badge</li>
        <hr />
        <li><img src={Tick}alt="Tick" />Unlimited community joins</li>
        <hr />
        <li><img src={Tick}alt="Tick" />Early access to trending rides</li>
        <hr />
        <li><img src={Tick}alt="Tick" />Earn reward points per ride</li>

    </ul>
<div className="d-flex justify-content-center">
  <button className='btn btn-outline buynowbtn'>BUY NOW</button>
</div>
</div>
</div>
</div>

</div>



    </div> 
    </section>

  )
}

export default Plans

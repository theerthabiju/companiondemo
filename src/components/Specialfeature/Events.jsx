import React from "react";
import "../../assets/css/specialfeature/events.css";
import eventimg1 from "../../assets/images/eventimg1.png";
import eventimg2 from "../../assets/images/eventimg2.png";
import eventimg3 from "../../assets/images/eventimg3.png";
import eventimg4 from "../../assets/images/eventimg4.png";

const Events = () => {
  return (
    <div className="container eventcontainer">
      <h3 className="eventshead">
        Local Events in <span className="indiatext">India</span>
      </h3>
      <p className="eventtextparagraph">
        Local events in India are deeply rooted in regional traditions, seasonal
        cycles, and community life. Unlike national festivals, these events
        often reflect the unique identity of a particular region or community,
        making them incredibly vibrant, intimate, and diverse. They range from
        colorful religious festivals to village fairs, harvest celebrations,
        tribal rituals, and folk performances, each offering an immersive
        glimpse into local life.
      </p>

      <div className="row eventrow pt-4 mt-5">

        
        <div className="col-md-3 col-sm-6 eventcol p-2">
         <div className="event-card" style={{ position: 'relative' }}>
  <img className="event-img" src={eventimg1} alt="Destination" />
  <div className="eventoverlay">
    <div className="event-info">ONAM</div>
  </div>
  <div className="event-body eventbody">
    <p className="eventparagraph">Onam is Kerala’s most celebrated festival, marking the homecoming of the 
        legendary King Mahabali. It features vibrant flower carpets (Pookalam), traditional dance and music, 
        snake boat races, and the grand Onam Sadya feast. Celebrated over 10 days, it reflects Kerala’s 
        rich cultural heritage and festive spirit. </p>
  </div>
</div>

        </div>

        <div className="col-md-3 col-sm-6 eventcol p-2">
      <div className="event-card" style={{ position: 'relative' }}>
  <img className="event-img" src={eventimg2} alt="Destination" />
  <div className="eventoverlay">
    <div className="event-info">DIWALI</div>
  </div>
  <div className="event-body eventbody">
    <p className="eventparagraph" >Diwali celebrates the victory of light over darkness and good over evil. 
        Homes are adorned with lamps, candles, and rangoli designs. Families gather to perform prayers,
         exchange gifts, and enjoy festive meals. The night sky is illuminated with fireworks and joyous celebrations.</p>
  </div>
</div>

        </div>

        <div className="col-md-3 col-sm-6 eventcol p-2">
      <div className="event-card" style={{ position: 'relative' }}>
  <img className="event-img" src={eventimg3} alt="Destination" />
  <div className="eventoverlay">
    <div className="event-info">HOLY</div>
  </div>
  <div className="event-body eventbody">
    <p className="eventparagraph" > Holi marks the arrival of spring and the triumph of good over evil.
         People of all ages smear each other with vibrant colors and dance to music.
         Bonfires are lit on the eve to symbolize the burning of evil spirits. It's a day of joy, 
         unity, and playful revelry.</p>
  </div>
</div>

        </div>

        <div className="col-md-3 col-sm-6 eventcol p-2">
     <div className="event-card" style={{ position: 'relative' }}>
  <img className="event-img" src={eventimg4} alt="Destination" />
  <div className="eventoverlay">
    <div className="event-info">CARNIVAL – Goa</div>
  </div>
  <div className="event-body eventbody">
    <p className="eventparagraph">A vibrant pre-Lenten festival featuring parades, music, 
        and dance. Streets come alive 
        with colorful floats and revelers in costumes. It's a fusion of Portuguese heritage
         and Indian culture. Tourists and locals alike partake in the merriment.</p>
         
  </div>
  
</div>
    
        </div>
      </div>
    </div>
  );
};

export default Events;

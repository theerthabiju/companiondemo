import React, { useState, useEffect } from "react";
import "../../assets/css/sub-css/storiesdetailed.css";
import addcommunity from "../../assets/images/addcommunity.png";
import place from "../../assets/images/place3.jpg";


const Storiesdetailed = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100); 
  }, []);

  return (
    <div className="container storydetailedcontainer">
      <img
        className={`blogimg ${fadeIn ? "fade-in-top" : ""}`}
        src={place}
        alt="blogimg"
      />

      <div className="blogcontents">
        <h3 className="blogtitle">
          <b>Blog Title here</b>
        </h3>
        <span className="hrhead">
          {" "}
          <hr />
        </span>
        <p className="writer">
          {" "}
          <i class="bi bi-pen-fill"> Theertha biju </i> |{" "}
          <i class="bi bi-calendar"> 16.April.2025</i> |{" "}
          <i class="bi bi-chat-fill"> Comments</i>{" "}
        </p>
        <p>
          Trunyan Hill is an underrated hike in Bali with amazing views of Mount
          Abang and the Batur caldera. It looks like a Jurassic landscape! This
          trail is located near the popular Mount Batur volcano, but it’s much
          less crowded and most foreign tourists don’t even know about it.I did
          the hike recently and it was a wonderful experience, with plenty of
          challenge and some of the best scenery on the island.
        </p>
       <span className="hrhead">
          {" "}
          <hr />
        </span>


        <h4 className="blogsubhead">How To Get There</h4>
        <p>
          Trunyan Hill is located in the Kintamani area of northeast Bali. It’s
          a 1 or 2 hour drive from touristy places like Ubud, Sanur, Canggu or
          Kuta in south Bali. The whole drive is paved, but the last part
          requires a bit of care because the road is curvy, steep, and bumpy
          with potholes.
        </p>
        <h6 className="blogsubhead2">
          There are two possible starting locations for the hike:
        </h6>
        <ul className="blogul">
          <li>
            <b>In Trunyan Village </b>. This is the main trailhead and it’s the
            one I used. The trail starts from a narrow alley in the middle of
            Trunyan village, and it’s marked with a sign by the road.{" "}
          </li>
          <li>
            <b>Above Trunyan Village.</b> This is an alternate trailhead partway
            up the hill. If you start here, the trail is a bit easier because it
            shaves off about 2 kilometers of hiking and 200 meters of elevation
            gain, but it also takes a bit more driving to reach since it’s
            outside the caldera.
          </li>
        </ul>

         <span className="hrhead">
          {" "}
          <hr />
        </span>



        <h4 className="blogsubhead">What To Expect: Hiking Trunyan Hill</h4>
        <p>
          The hike to Trunyan is steep and challenging, and there are plenty of
          opportunities to hurt an ankle if you aren’t careful, but it’s never
          dangerous in terms of drop-offs.
        </p>
        <p>
          Bug spray is a must: there are some mosquitoes in the forest, and I
          encountered hordes of flies on the hilltops. They’re aggressive and
          they can bite! Kintamani is the only place in Bali where I’ve seen
          such annoying flies.
        </p>
        <p>
          On the plus side, I went on a Saturday and the whole trail was
          surprisingly uncrowded. It was a really nice contrast to the huge
          crowds at Mount Batur nowadays. I only met one foreign couple with a
          guide, and a handful of friendly local teenagers.
        </p>
        <span className="hrhead">
          {" "}
          <hr />
        </span>
         <h4 className="blogsubhead">What To Expect: Hiking Trunyan Hill</h4>
        <p>
          The hike to Trunyan is steep and challenging, and there are plenty of
          opportunities to hurt an ankle if you aren’t careful, but it’s never
          dangerous in terms of drop-offs.
        </p>
        <p>
          Bug spray is a must: there are some mosquitoes in the forest, and I
          encountered hordes of flies on the hilltops. They’re aggressive and
          they can bite! Kintamani is the only place in Bali where I’ve seen
          such annoying flies.
        </p>
        <p>
          On the plus side, I went on a Saturday and the whole trail was
          surprisingly uncrowded. It was a really nice contrast to the huge
          crowds at Mount Batur nowadays. I only met one foreign couple with a
          guide, and a handful of friendly local teenagers.
        </p>
      </div>
    </div>      
   
  );
};

export default Storiesdetailed;




     


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../assets/css/sub-css/stories.css";
import storybg from "../../assets/images/storybg.png";
import st1 from "../../assets/images/st1.png";
import st2 from "../../assets/images/st2.png";
import st3 from "../../assets/images/st3.png";
import other1 from "../../assets/images/other1.png";
import other2 from "../../assets/images/other2.png";
import other3 from "../../assets/images/other3.png";
import other4 from "../../assets/images/other4.png";

const Stories = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const otherStories = [
    { img: other1, title: "Companion make more easy life" },
    { img: other2, title: "Mountain Adventure Begins" },
    { img: other3, title: "My Trip With Companion" },
    { img: other4, title: "Traveling with Passion" },
        { img: other4, title: "Traveling with Passion" },
            { img: other2, title: "Mountain Adventure Begins" },
{ img: other1, title: "Companion make more easy life" },
    { img: other2, title: "Mountain Adventure Begins" },
    { img: other3, title: "My Trip With Companion" },
    { img: other4, title: "Traveling with Passion" },
        { img: other4, title: "Traveling with Passion" },
            { img: other2, title: "Mountain Adventure Begins" }


  ];

  const filteredOtherStories = otherStories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container storiescontainer">
      <div className="row storiesrow d-flex justify-content-between align-items-center mb-5">
        <h3 className="storieshead col-md-6">Travel Stories</h3>
        <span className="hrhead">
          <hr />
        </span>
      </div>

      <div className="blogcards">
        <div className="storycard-container overlay-story1">
          <div className="storycard1 card">
            <div className="row storyrow d-flex justify-content-center align-items-center">
              <div className="col-md-6 story1headcol1">
                <h6 className="story1head">
                  Companion make <br />
                  more easy life
                </h6>
                <p className="writername">by John Doe | 8 comments | Sep 16</p>
                <Link className="btn btn-outline readnowblogbtn" to="/companion/blogone">
                  Read Now
                </Link>
              </div>
              <div className="col-md-6 storyheadcol2">
                <img src={st1} alt="storybg" />
              </div>
            </div>
          </div>

          <div className="storycard2 card">
            <div className="row storyrow d-flex justify-content-center align-items-center">
              <div className="col-md-6 story1headcol1">
                <h6 className="story1head">Amazing Trip</h6>
                <p className="writername">by John Doe | 8 comments | Sep 16</p>
                <Link className="btn btn-outline readnowblogbtn" to="/companion/blogone">
                  Read Now
                </Link>
              </div>
              <div className="col-md-6 storyheadcol2">
                <img className="storybg2" src={st2} alt="storybg" />
              </div>
            </div>
          </div>

          <div className="storycard3 card">
            <div className="row storyrow d-flex justify-content-center align-items-center">
              <div className="col-md-6 story1headcol1">
                <h6 className="story1head">
                  My Trip With <br />
                  Companion
                </h6>
                <p className="writername">by John Doe | 8 comments | Sep 16</p>
                <Link className="btn btn-outline readnowblogbtn" to="/companion/blogone">
                  Read Now
                </Link>
              </div>
              <div className="col-md-6 storyheadcol2">
                <img className="storybg3" src={st3} alt="storybg" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="centertext-overlay text-center">
            <h4 className="text-white centertext">Unforgettable Travel Discoveries</h4>
          </div>
          <img src={storybg} alt="img" className="img-fluid my-5 storybg" />
        </div>

        <div className="storycard-container overlay-story2">
          <div className="storycard1 card">
            <div className="row storyrow d-flex justify-content-center align-items-center">
              <div className="col-md-6 story1headcol1">
                <h6 className="story1head">
                  Companion make <br />
                  more easy life
                </h6>
                <p className="writername">by John Doe | 8 comments | Sep 16</p>
                <Link className="btn btn-outline readnowblogbtn" to="/companion/blogone">
                  Read Now
                </Link>
              </div>
              <div className="col-md-6 storyheadcol2">
                <img src={st1} alt="storybg" />
              </div>
            </div>
          </div>

          <div className="storycard1 card">
            <div className="row storyrow d-flex justify-content-center align-items-center">
              <div className="col-md-6 story1headcol1">
                <h6 className="story1head">Amazing Trip</h6>
                <p className="writername">by John Doe | 8 comments | Sep 16</p>
                <Link className="btn btn-outline readnowblogbtn" to="/companion/blogone">
                  Read Now
                </Link>
              </div>
              <div className="col-md-6 storyheadcol2">
                <img className="storybg2" src={st2} alt="storybg" />
              </div>
            </div>
          </div>

          <div className="storycard1 card">
            <div className="row storyrow d-flex justify-content-center align-items-center">
              <div className="col-md-6 story1headcol1">
                <h6 className="story1head">
                  My Trip With <br />
                  Companion
                </h6>
                <p className="writername">by John Doe | 8 comments | Sep 16</p>
                <Link className="btn btn-outline readnowblogbtn" to="/companion/blogone">
                  Read Now
                </Link>
              </div>
              <div className="col-md-6 storyheadcol2">
                <img className="storybg3" src={st3} alt="storybg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Stories Section */}
      <div className="storiesrow d-flex justify-content-between align-items-center mt-5">
        <h3 className="storieshead">Other Stories</h3>
        <div className="col-md-6 storiessearch">
          <input
            type="text"
            className="custom-storysearch-input"
            placeholder="Search stories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <span className="hrhead">
        <hr />
      </span>

      <div className="row otherblogrow text-center g-4">
        {filteredOtherStories.length > 0 ? (
          filteredOtherStories.slice(0, visibleCount).map((story, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3 otherblogcol">
              <div className="card otherblogcard h-100">
                <img className="otherblogimg img-fluid" src={story.img} alt={`blogimg-${index}`} />
                <div className="otherblog-title otherblog-overlay">
                  <h6 className="text-white">{story.title}</h6>
                  <p className="writername text-start">by John Doe | 8 comments | Sep 16</p>
                  <Link className="btn btn-outline readnowblogbtn2" to="/companion/blogone">
                    Read Now
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center"><p>No stories found.</p></div>
        )}
      </div>

      {visibleCount < filteredOtherStories.length && (
        <div className="text-center mt-4">
          <button className="btn btn-outline loadmoreblog "  onClick={() => setVisibleCount(prev => prev + 4)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Stories;

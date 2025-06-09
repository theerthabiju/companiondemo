import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import Login from "./components/loginsignin/Login";
import Sign from "./components/loginsignin/Sign";
import Specialfeature from "./Pages/Specialfeature";
import Tent from "./components/Specialfeature/Tent";
import Midway from "./components/Specialfeature/Midway";
import NotFoundError from "./components/404/NotFoundError";
import View from "./components/Specialfeature/View";
import Events from "./components/Specialfeature/Events";
import About from "./components/AboutUs/About";
import Exploreride from "./components/Exploreride/Exploreride";
import Postnewride from "./components/NewRide/Postnewride";
import Community from "./components/Community/Community";
import Communitydetailed from "./components/Community/Communitydetailed";
import AddCommunity from "./components/Community/AddCommunity";
import Stories from "./components/Stories/Stories";
import Contact from "./components/ContactUS/Contact";
import Profile from "./components/profile/Profile";
import Storiesdetailed from "./components/Stories/Storiesdetailed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
            <Route path="/Profile" element={<Profile/>} />

          <Route path="/companion" element={<Specialfeature />}>
            <Route index element={<Navigate to="tent" replace />} />
            <Route path="tent" element={<Tent />} />
            <Route path="midwayjoin" element={<Midway />} />
            <Route path="addviewpoints" element={<View/>} />
            <Route path="localevents" element={<Events/>} />
            <Route path="aboutus" element={<About/>} />
            <Route path="Exploreride" element={<Exploreride/>} />
            <Route path="Postnewride" element={<Postnewride/>} />
            <Route path="Community" element={<Community/>} />
            <Route path="bulletclub" element={<Communitydetailed/>} />
            <Route path="add-community" element={<AddCommunity/>} />
            <Route path="Blogs" element={<Stories/>} />
            <Route path="blogone" element={<Storiesdetailed/>} />
            <Route path="Contact" element={<Contact/>} />









          </Route>

        </Route>

        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </Router>
  );
};

export default App;

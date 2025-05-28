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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Sign />} />

          <Route path="/companion" element={<Specialfeature />}>
            <Route index element={<Navigate to="tent" replace />} />
            <Route path="tent" element={<Tent />} />
            <Route path="midwayjoin" element={<Midway />} />
            <Route path="addviewpoints" element={<View/>} />
            <Route path="localevents" element={<Events/>} />
            <Route path="aboutus" element={<About/>} />
            <Route path="Exploreride" element={<Exploreride/>} />
            <Route path="Postnewride" element={<Postnewride/>} />



          </Route>

        </Route>

        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </Router>
  );
};

export default App;

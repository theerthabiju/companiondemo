import { Outlet, useLocation } from "react-router-dom";
import TentBanner from "../components/Specialfeature/Subbanners/Tentbanner";

const Specialfeature = () => {
  const { pathname } = useLocation();

  const isRoot = pathname === "/companion";

  if (isRoot) return null; 

  return (
    <div>
      <TentBanner />
      <Outlet />
    </div>
  );
};

export default Specialfeature;

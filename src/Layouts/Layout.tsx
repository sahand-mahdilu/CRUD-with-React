import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout
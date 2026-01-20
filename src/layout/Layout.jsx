import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.includes("project") && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;

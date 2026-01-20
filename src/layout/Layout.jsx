import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import ToTopButton from "@/components/ToTopButton";
const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.includes("project") && <Navbar />}
      <Outlet />
      <ToTopButton/>
    </div>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import ToTopButton from "@/components/ToTopButton";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ToTopButton />
    </div>
  );
};

export default Layout;

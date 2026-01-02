import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

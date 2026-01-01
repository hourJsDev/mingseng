import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Layout = () => {
  return (
    <BackgroundBeamsWithCollision>
      <Navbar />
      <Outlet />
    </BackgroundBeamsWithCollision>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;

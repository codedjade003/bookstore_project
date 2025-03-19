import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Uses Flowbite's built-in styles */}
      <SideBar />

      {/* Main content area */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

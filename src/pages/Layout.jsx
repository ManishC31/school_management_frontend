// src/components/Layout/Layout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-base-200 z-20`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="navbar shadow-md fixed top-0 left-0 right-0 z-30">
          <div className="flex-none">
            <button
              className="btn btn-square btn-ghost"
              onClick={toggleSidebar}
              onMouseEnter={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 text-center">
            <a className="text-2xl tracking-widest uppercase mx-auto">
              School management
            </a>
          </div>
          <div className="flex-none">
            {/* Add items like user profile, notifications, etc., if needed */}
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 mt-16 p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

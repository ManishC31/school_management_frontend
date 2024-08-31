// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="min-h-full px-4 py-2 bg-base-100 shadow-2xl">
      <ul className="menu text-base-content mt-12">
        {/* Sidebar Tabs */}
        <li className="shadow rounded-md my-2">
          <Link to="/home" onClick={toggleSidebar}>
            <p>Home</p>
          </Link>
        </li>
        <li className="shadow rounded-md my-2">
          <Link to="/student" onClick={toggleSidebar}>
            Student
          </Link>
        </li>
        <li className="shadow rounded-md my-2">
          <Link to="/teacher" onClick={toggleSidebar}>
            Teacher
          </Link>
        </li>
        <li className="shadow rounded-md my-2">
          <Link to="/settings" onClick={toggleSidebar}>
            Settings
          </Link>
        </li>
        {/* Add more tabs as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

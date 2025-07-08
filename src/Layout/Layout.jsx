// src/layouts/Layout.jsx
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `p-2 rounded hover:bg-blue-100 ${
                  isActive ? "bg-blue-200 font-bold" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/players"
              className={({ isActive }) =>
                `p-2 rounded hover:bg-blue-100 ${
                  isActive ? "bg-blue-200 font-bold" : ""
                }`
              }
            >
              Players
            </NavLink>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `p-2 rounded hover:bg-blue-100 ${
                  isActive ? "bg-blue-200 font-bold" : ""
                }`
              }
            >
              Reports
            </NavLink>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

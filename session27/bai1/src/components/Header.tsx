import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-blue-600 h-[72px] text-[24px]">
      <nav className="flex justify-evenly items-center text-white font-medium p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-white pb-1"
              : "hover:border-b-2 hover:border-gray-300 pb-1"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-white pb-1"
              : "hover:border-b-2 hover:border-gray-300 pb-1"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-white pb-1"
              : "hover:border-b-2 hover:border-gray-300 pb-1"
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

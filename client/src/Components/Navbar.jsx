import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [Openmenu, setOpenmenu] = useState(false);

  const Menuopen = () => {
    setOpenmenu(!Openmenu);
    // Toggle body overflow to prevent scrolling when the menu is open
    if (!Openmenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>


     
      {/* Navbar container */}
      <div className="flex justify-between items-center py-5 px-8 bg-[#d7e2f3] shadow-md fixed top-4 lg:top-2 right-[18px] md:right-[40px] lg:right-[40px] w-[90%] lg:w-[95%] h-[80px] z-[999]">
        {/* Logo */}
        <div className="text-[30px] flex items-center">
          <i className="fa-solid fa-app">
            <span className="text-[11px] ml-2">Grocery App</span>
          </i>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-[16px] font-semibold text-[#1a1a1a]">
          <li className="hover:text-[#088178] transition-all duration-300">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="hover:text-[#088178] transition-all duration-300">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden cursor-pointer" onClick={Menuopen}>
          <i className="fa-sharp fa-solid fa-bars text-[25px]"></i>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-[#e3e6f3] z-[1000] shadow-lg transform ${
          Openmenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {/* Close Icon */}
        <div className="flex justify-between items-center px-5 py-5">
          <i
            onClick={Menuopen}
            className="fa-sharp fa-solid fa-xmark text-[30px] cursor-pointer"
          ></i>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col items-start pl-5 space-y-8 mt-10 text-[16px] font-semibold text-[#1a1a1a]">
          <li className="hover:text-[#088178] transition-all duration-300">
            <NavLink to="/login" onClick={Menuopen}>
              Login
            </NavLink>
          </li>
          <li className="hover:text-[#088178] transition-all duration-300">
            <NavLink to="/dashboard" onClick={Menuopen}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

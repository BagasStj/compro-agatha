"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // Import Heroicons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-2 px-6 transition-all duration-500 bg-gradient-to-r from-[#7A58FF] via-[#2E4ABD] to-[#0A72D1] text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={logo} alt="logo" priority className="w-auto h-auto" />
        </div>

        {/* Search Box */}
        <div className="hidden lg:flex items-center space-x-5 bg-[#313131] px-1 py-2 rounded-md">
          <MagnifyingGlassIcon className="h-5 w-5 text-white" /> {/* Icon Kaca Pembesar */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white border-none focus:outline-none"
          />
        </div>
        
        {/* Toggle Button (Visible only on mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <div
            className={`relative w-6 h-6 transition-transform duration-500 ease-in-out ${
              isOpen ? "transform rotate-45" : ""
            }`}
          >
            <span
              className={`block absolute w-full h-0.5 bg-white transform transition duration-500 ease-in-out ${
                isOpen ? "rotate-45 top-0" : "top-0"
              }`}
            ></span>
            <span
              className={`block absolute w-full h-0.5 bg-white transform transition duration-500 ease-in-out ${
                isOpen ? "opacity-0" : "top-2.5"
              }`}
            ></span>
            <span
              className={`block absolute w-full h-0.5 bg-white transform transition duration-500 ease-in-out ${
                isOpen ? "-rotate-45 bottom-0" : "bottom-0"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen
            ? "max-h-screen opacity-100 bg-gradient-to-br from-[#7A58FF] via-[#2E4ABD] to-[#0A72D1]"
            : "max-h-0 opacity-0"
        } lg:hidden flex flex-col items-center justify-center gap-8 text-center transition-all duration-700 ease-in-out overflow-hidden`}
      >
      </div>
    </nav>
  );
};

export default Navbar;

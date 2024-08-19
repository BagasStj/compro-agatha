"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarGuide = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[#3f4c6b] to-[#8e9eab] py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <span className="text-white text-xl font-semibold">agatha.</span>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 rounded-full bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  );
};

export default NavbarGuide;

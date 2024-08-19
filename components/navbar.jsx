"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { menu } from "@/data/menu";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-500 ${
        scrolled || isOpen ? "bg-[#2d2d2d]" : "bg-transparent"
      } text-white`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-700 ease-in-out ${
          isOpen ? "flex-col" : "flex-row"
        }`}
      >
        {/* Logo */}
        <div
          className={`flex-shrink-0 transition-all duration-700 ease-in-out ${
            isOpen ? "mb-4 w-full text-center" : "w-auto"
          }`}
        >
          <div
            className={`${
              isOpen ? "bg-purple-700 p-2 rounded-full inline-block" : "bg-transparent"
            } transition-all duration-700 ease-in-out`}
          >
            <Image
              src={logo}
              alt="logo"
              priority
              className={`transition-all duration-700 ease-in-out ${
                isOpen ? "mx-auto transform translate-y-2" : "transform translate-y-0"
              }`}
            />
          </div>
        </div>

        {/* Toggle Button (Visible only on mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none mt-4"
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

        {/* Menu Container (Hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-8">
          {menu.map((item, i) => (
            <a
              key={i}
              href={item.url}
              onClick={item.onClick} // Menangani klik untuk scroll halus jika ada
              className="block text-white hover:text-white transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen
            ? "max-h-screen opacity-100 bg-gradient-to-br from-[#7A58FF] via-[#2E4ABD] to-[#0A72D1]"
            : "max-h-0 opacity-0"
        } lg:hidden flex flex-col items-center justify-center gap-8 text-center transition-all duration-700 ease-in-out overflow-hidden`}
      >
        {menu.map((item, i) => (
          <a
            key={i}
            href={item.url}
            onClick={item.onClick} // Menangani klik untuk scroll halus jika ada
            className="block mt-4 text-white hover:text-white transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

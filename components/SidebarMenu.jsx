"use client";
import React, { useState } from "react";

const SidebarMenu = () => {
  const [isFeatureUsageOpen, setIsFeatureUsageOpen] = useState(false);

  const toggleFeatureUsage = () => {
    setIsFeatureUsageOpen(!isFeatureUsageOpen);
  };

  return (
    <div className="w-64 bg-transparent text-white min-h-screen p-4 fixed top-20 left-0">
      <ul className="space-y-4">
        <li>
          <a href="intro" className="hover:text-purple-400">
            Introduction
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400">
            Limitations
          </a>
        </li>
        <li>
          {/* Dropdown Menu for Feature Usage */}
          <div>
            <button
              onClick={toggleFeatureUsage}
              className="flex items-center justify-between w-full hover:text-purple-400 focus:outline-none"
            >
              Feature Usage
              <span className={`transform ${isFeatureUsageOpen ? "rotate-90" : ""} transition-transform duration-200`}>
                <i className="fas fa-chevron-right"></i>
              </span>
            </button>
            {/* Submenu Items */}
            {isFeatureUsageOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <a href="chatai" className="hover:text-purple-400">
                    AI Chat
                  </a>
                </li>
                <li>
                  <a href="AIF" className="hover:text-purple-400">
                    AI Flow Diagram
                  </a>
                </li>
                <li>
                  <a href="AI2" className="hover:text-purple-400">
                    AI Telephone
                  </a>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400">
            Terms and Conditions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;

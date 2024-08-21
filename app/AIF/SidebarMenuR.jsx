"use client";
import React, { useState, useEffect } from "react";

const SidebarMenuRight = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sections = ['access', 'feature', 'explanation', 'usage-tips'];

    // Initial setting for the first section if no section is active
    if (sections.length > 0) {
      setActiveSection(sections[0]);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(`ID: ${entry.target.id}, Intersecting: ${entry.isIntersecting}`);
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5, rootMargin: '0px' });

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="w-64 bg-transparent text-white min-h-screen p-4 fixed top-20 right-0 z-50">
      <ul className="space-y-4">
        <li>
          <a
            href="#access"
            onClick={(e) => handleScroll(e, 'access')}
            className={`hover:text-purple-400 ${activeSection === 'access' ? 'text-[#7A58FF]' : ''}`}
          >
            Accessing the AI Flow Diagram Feature
          </a>
        </li>
        <li>
          <a
            href="#feature"
            onClick={(e) => handleScroll(e, 'feature')}
            className={`hover:text-purple-400 ${activeSection === 'feature' ? 'text-[#7A58FF]' : ''}`}
          >
            How to Use the AI Flow Diagram Feature
          </a>
        </li>
        <li>
          <a
            href="#explanation"
            onClick={(e) => handleScroll(e, 'explanation')}
            className={`hover:text-purple-400 ${activeSection === 'explanation' ? 'text-[#7A58FF]' : ''}`}
          >
            Flow Explanation in AI Flow Diagram
          </a>
        </li>
        <li>
          <a
            href="#usage-tips"
            onClick={(e) => handleScroll(e, 'usage-tips')}
            className={`hover:text-purple-400 ${activeSection === 'usage-tips' ? 'text-[#7A58FF]' : ''}`}
          >
            Usage Tips
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenuRight;

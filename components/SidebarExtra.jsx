"use client";
import React, { useState, useEffect, useRef } from "react";

const SidebarMenuRight = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = ['guide', 'how-to-use', 'custom', 'usage-tips'];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

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
    <div className="w-64 bg-transparent text-white min-h-screen p-4 fixed top-20 right-0">
      <ul className="space-y-4">
        <li>
          <a
            href="#guide"
            onClick={(e) => handleScroll(e, 'guide')}
            className={`hover:text-purple-400 ${activeSection === 'guide' ? 'text-[#7A58FF]' : ''}`}
          >
            Accessing the Ai Chat Feature
          </a>
        </li>
        <li>
          <a
            href="#how-to-use"
            onClick={(e) => handleScroll(e, 'how-to-use')}
            className={`hover:text-purple-400 ${activeSection === 'how-to-use' ? 'text-[#7A58FF]' : ''}`}
          >
            How to Use the AI Chat Feature
          </a>
        </li>
        <li>
          <a
            href="#custom"
            onClick={(e) => handleScroll(e, 'custom')}
            className={`hover:text-purple-400 ${activeSection === 'custom' ? 'text-[#7A58FF]' : ''}`}
          >
            How to Use the Custom Prompt
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
    
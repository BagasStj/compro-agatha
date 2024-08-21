"use client";
import React, { useState, useEffect, useRef } from "react";

const SidebarMenuRight = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sections = ['guide', 'how-to-use', 'assistant', 'number', 'usage-tips'];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
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
            href="#guide"
            onClick={(e) => handleScroll(e, 'guide')}
            className={`hover:text-purple-400 ${activeSection === 'guide' ? 'text-[#7A58FF]' : ''}`}
          >
            Accessing the AI Phone Feature
          </a>
        </li>
        <li>
          <a
            href="#how-to-use"
            onClick={(e) => handleScroll(e, 'how-to-use')}
            className={`hover:text-purple-400 ${activeSection === 'how-to-use' ? 'text-[#7A58FF]' : ''}`}
          >
            How to Use the AI Phone Feature
          </a>
        </li>
        <li>
          <a
            href="#assistant"
            onClick={(e) => handleScroll(e, 'assistant')}
            className={`hover:text-purple-400 ${activeSection === 'assistant' ? 'text-[#7A58FF]' : ''}`}
          >
            AI Phone Assistant
          </a>
        </li>
        <li>
          <a
            href="#number"
            onClick={(e) => handleScroll(e, 'number')}
            className={`hover:text-purple-400 ${activeSection === 'number' ? 'text-[#7A58FF]' : ''}`}
          >
            AI Phone Number Call
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

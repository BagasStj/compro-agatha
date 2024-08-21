"use client";
import React, { useState, useEffect, useRef } from "react";

const SidebarMenuRight = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // Perbarui activeSection saat mengklik link
    }
  };

  useEffect(() => {
    const sections = ["agatha", "structure", "feature"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-64 bg-transparent text-white min-h-screen p-4 fixed top-20 right-0 z-10">
      <ul className="space-y-4">
        <li>
          <a
            href="#agatha"
            onClick={(e) => handleScroll(e, "agatha")}
            className={`hover:text-purple-400 ${
              activeSection === "agatha" ? "text-[#7A58FF]" : ""
            }`}
          >
            What is Agatha?
          </a>
        </li>
        <li>
          <a
            href="#structure"
            onClick={(e) => handleScroll(e, "structure")}
            className={`hover:text-purple-400 ${
              activeSection === "structure" ? "text-[#7A58FF]" : ""
            }`}
          >
            Structure
          </a>
        </li>
        <li>
          <a
            href="#feature"
            onClick={(e) => handleScroll(e, "feature")}
            className={`hover:text-purple-400 ${
              activeSection === "feature" ? "text-[#7A58FF]" : ""
            }`}
          >
            Feature
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenuRight;

"use client";
import Image from 'next/image';
import React from 'react';
import SidebarMenuRight from './SidebarMenuR'; // Ensure the path is correct

export default function Introduction() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 mx-4 p-4"> {/* Main content */}
        {/* Hero Section */}
        <section id="home" className="p-8 bg-transparent mt-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold">Introduction</h1>
            <p className="mt-10 text-xl">
                Welcome to the official Agatha documentation
            </p>
            <img
              src="/elipse.svg"
              alt="Lingkaran Detail"
              className="absolute"
              style={{
                top: '70%',
                right: '5%',
                width: '700px',
                height: '700px',
                transform: 'translate(50%, -50%)',
                zIndex: 1,
              }}
            />  
            <div className="relative w-full h-50 mt-10 rounded-lg overflow-hidden" style={{ paddingBottom: '38%' }}> {/* Adjust padding-bottom to match video aspect ratio */}
            <video
                src="/vid.mp4"
                alt="Accessing AI Chart"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
            />
            </div> 
        </div>
        </section>
        

        {/* Guide Section */}
        <section className="p-8 bg-transparent mt-2"> {/* Adjust margin-top for closer positioning */}
          <div className="max-w-5xl mx-auto">
            <h2 id="agatha" className="text-4xl font-bold">What is Agatha?</h2>
            <p className="mt-10 text-xl">
            AGATHA (Adaptive Global Artificial Technology Hybrid Automation) is an innovative AI platform that transforms the way businesses operate with artificial intelligence. 
            Designed to deliver adaptive, scalable, and globally applicable solutions, AGATHA improves efficiency and drives innovation across industries. 
            Its focus on user empowerment and automation enables businesses to create AI workflows that fit their unique needs.
            </p>
            <h3 id="structure" className="mt-10 text-4xl font-bold">Structure</h3>
            <p className="mt-10 text-xl">
            AGATHA (Adaptive Global Artificial Technology Hybrid Automation) is an innovative AI platform that transforms the way businesses operate with artificial intelligence. 
            Designed to deliver adaptive, scalable, and globally applicable solutions, AGATHA improves efficiency and drives innovation across industries. I
            ts focus on user empowerment and automation enables businesses to create AI workflows that fit their unique needs.           
             </p>
            <img
              src="/elipse2.svg"
              alt="Lingkaran Detail"
              className="absolute"
              style={{
                top: '150%',
                right: '91%',
                width: '700px',
                height: '700px',
                transform: 'translate(50%, -50%)',
                zIndex: 0,
              }}
            />
            <h4 id="feature" className="mt-10 text-4xl font-bold">Feature</h4>
            <p className="mt-10 text-3xl font-bold">1. AI Chat</p>
            <p className="mt-10 text-xl">
            AGATHA (Adaptive Global Artificial Technology Hybrid Automation) is an innovative AI platform that transforms the way businesses operate with artificial intelligence. Designed to deliver adaptive, 
            scalable, and globally applicable solutions, 
            AGATHA improves efficiency and drives innovation across industries. 
            Its focus on user empowerment and automation enables businesses to create AI workflows that fit their unique needs.
            </p>
            <p className="mt-10 text-3xl font-bold">2. AI Flow Diagram</p>
            <p className="mt-10 text-xl">
            AGATHA (Adaptive Global Artificial Technology Hybrid Automation) is an innovative AI platform that transforms the way businesses operate with artificial intelligence. 
            esigned to deliver adaptive, scalable, and globally applicable solutions, A
            GATHA improves efficiency and drives innovation across industries.
             Its focus on user empowerment and automation enables businesses to create AI workflows that fit their unique needs.
            </p>
            <p className="mt-10 text-3xl font-bold">3. AI Phone</p>
            <p className="mt-10 text-xl">
            AGATHA (Adaptive Global Artificial Technology Hybrid Automation) is an innovative AI platform that transforms the way businesses operate with artificial intelligence. 
            Designed to deliver adaptive, scalable, and globally applicable solutions, AGATHA improves efficiency and drives innovation across industries. 
            Its focus on user empowerment and automation enables businesses to create AI workflows that fit their unique needs.
            </p>
            <img
              src="/elipse.svg"
              alt="Lingkaran Detail"
              className="absolute"
              style={{
                top: '200%',
                right: '5%',
                width: '700px',
                height: '700px',
                transform: 'translate(50%, -50%)',
                zIndex: 1,
              }}
            />  

             </div>               
        </section>
     </main>    
      <SidebarMenuRight />  {/* Right sidebar */}
    </div>
  );
}

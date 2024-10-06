"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

export default function Home() {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = "https://drive.google.com/uc?export=download&id=1_4-bIX5w7sevni3X52u8K_Um6VEw-U2H";
    }
  }, []);

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between p-4 md:p-25 fade-in">
        <div className="welcome-text w-full md:w-auto mb-8 md:mb-0">
          <img src="/welcome.svg" alt="Welcome to AGATHA" className=" h-[20vh] w-full md:w-auto md:h-[58vh]" />
          <a href="#" className="try-button bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 mt-4 inline-block">
            Try It For Free
            <i className="fas fa-arrow-right ml-2" style={{ transform: 'rotate(-45deg)', display: 'inline-block' }}></i>
          </a>
        </div>
        <div className="robot-container relative w-full md:w-900px">
          <img
            src="/elipse.svg"
            alt="Lingkaran Detail"
            className="absolute hidden md:block"
            style={{
              top: '70%',
              right: '-5%',
              width: '700px',
              height: '700px',
              transform: 'translate(50%, -50%)',
              zIndex: 1,
            }}
          />
          <img src="/gambar-about.png" alt="Background" className="robot-image w-full md:w-auto" />
          <img src="/belakang-robot.png" alt="Robot" className="background-image w-full md:w-auto" />
        </div>
      </section>

      {/* Introduction */}
      <section id="intro" className="p-4 md:p-10 text-center fade-in">
        <h2 className="text-2xl font-bold mb-5">
          <img src="/introduction.svg" alt="Icon" className="inline-block ml-2" />
        </h2>
        <p className="text-lg md:text-2xl mt-8">
          AGATHA (Adaptive Global Artificial Technology Hybrid Automation) is an innovative AI platform that transforms the way businesses operate with artificial intelligence. Designed to deliver adaptive, scalable, and globally applicable solutions, AGATHA improves efficiency and drives innovation across industries. Its focus on user empowerment and automation enables businesses to create AI workflows that fit their unique needs.
        </p>
        <img
          src="/elipse2.svg"
          alt="Lingkaran Detail"
          className="absolute hidden md:block"
          style={{
            top: '-50%',
            left: '-5%',
            width: '700px',
            height: '700px',
            transform: 'translate(-50%, 50%)',
            zIndex: -1,
          }}
        />
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="text-center fade-in mt-8 md:mt-12">
        <h2 className="text-2xl font-bold mb-4">
          <img src="/vision.svg" alt="Icon" className="inline-block ml-2" />
        </h2>
        <p className="text-lg md:text-2xl mb-8 mt-8">
          &quot;To provide innovative solutions that empower businesses and individuals to achieve maximum efficiency and sustainable progress, with the ability for users to create and customize their own workflows.&quot;
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-8 md:mt-40">
          <img src="/mission.svg" alt="Icon" className="inline-block ml-2" />
        </h2>
        <div className="container mt-8 p-6">
          <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center text-center fade-in w-1/2 md:w-auto">
              <Image src="/commitment.png" alt="Quality" width={67} height={50} />
              <p className="mt-2">Commitment to quality</p>
            </div>
            <div className="flex flex-col items-center text-center fade-in w-1/2 md:w-auto">
              <Image src="/education.png" alt="Education" width={86} height={50} />
              <p className="mt-2">Education and training</p>
            </div>
            <div className="flex flex-col items-center text-center fade-in w-1/2 md:w-auto">
              <Image src="/collab.png" alt="Collaboration" width={69} height={60} />
              <p className="mt-2">Collaboration and partnership</p>
            </div>
            <div className="flex flex-col items-center text-center fade-in w-1/2 md:w-auto">
              <Image src="/innovation.png" alt="Innovation" width={60} height={50} />
              <p className="mt-2">Cutting edge innovation</p>
            </div>
            <div className="flex flex-col items-center text-center fade-in w-1/2 md:w-auto">
              <Image src="/user.png" alt="User-1" width={95} height={50} />
              <p className="mt-2">User Empowerment</p>
            </div>
            <img
              src="/elipse.svg"
              alt="Lingkaran Detail"
              className="absolute hidden md:block"
              style={{
                top: '70%',
                right: '-5%',
                width: '700px',
                height: '700px',
                transform: 'translate(50%, -50%)',
                zIndex: 0,
              }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <h2 id="fitur" className="text-2xl font-bold mb-4 text-center mt-8 md:mt-40 fade-in">
        <img src="/feature.svg" alt="Icon" className="inline-block ml-2" />
      </h2>

      {/* Container untuk fitur-fitur */}
      <section className="features-section text-center rounded-xl mt-8 md:mt-12 mb-5 fade-in">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="items-start justify-center p-8 space-y-4">
            <div className='flex items-center justify-center'>
              <img src="/chat.png" alt="chat-ai" width={60} height={50} />
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2 text-center"> AI Chat</h3>
            <p>This feature allows users to ask questions on any topic, providing quick and accurate answers, helping users find solutions without searching extensively.</p>
          </div>
          <div className="items-start justify-center p-8 md:border-l-2 md:border-r-2 border-white space-y-4">
            <div className='flex items-center justify-center'>
              <img src="/flow.png" alt="flow" width={70} height={50} />
            </div>
            <h3 className="text-xl font-bold mb-2 mt-1 text-center">AI Flow </h3>
            <p>Simplify development and business processes by creating customizable workflows that automate complex tasks, streamlining your operations with ease.</p>
          </div>
          <div className="items-start justify-center p-8 md:border-r-2 border-white space-y-4">
            <div className='flex items-center justify-center'>
              <img src="/phone.png" alt="phone" width={60} height={50} />
            </div>
            <h3 className="text-xl font-bold mb-2 mt-2 text-center">AI Phone</h3>
            <p>Improve customer service efficiency by automating responses to frequently asked questions through an intelligent phone system.</p>
          </div>
          <div className="items-start justify-center p-8 space-y-4">
            <div className='flex items-center justify-center'>
              <img src="/reminder.svg" alt="phone" width={60} height={50} />
            </div>
            <h3 className="text-xl font-bold mb-2 mt-2 text-center">AI Reminder</h3>
            <p>Send timely notifications and updates to users, ensuring they never miss important schedules or deadlines.</p>
          </div>
        </div>
      </section>

      <section className="md:transparent-svg mb-0 w-full h-full rounded-xl pt-1 md:mb-[1vh] fade-in">
        <div className="bg-transparent  md:px-0">
          {/* Amaze */}
          <div className=" md:py-16">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16'>
              <div className="px-4 md:px-0">
                <h2 className='text-start text-2xl md:text-[6vh] font-extrabold leading-tight md:leading-[1.2] w-full md:w-[32vw] break-words mb-6 md:mb-10' style={{ fontFamily: 'sans-serif' }}>Feature that amazed our visitors</h2>
                <div className="flex flex-col space-y-6 md:space-y-10">
                  <div className="flex items-start w-full md:w-[35vw]">
                    <img src="/icon-ai-3.svg" alt="AI Icon" className="w-8 h-8 md:w-16 md:h-16 mr-4 md:mr-6 flex-shrink-0" />
                    <div>
                      <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Interactive Chats</h3>
                      <p className="text-xs md:text-base">Engage in interactive chats and customize prompts for a personalized conversation experience</p>
                    </div>
                  </div>
                  <div className="flex items-start w-full md:w-[35vw]">
                    <img src="/link-icon.svg" alt="Link Icon" className="w-8 h-8 md:w-16 md:h-16 mr-4 md:mr-6 flex-shrink-0" />
                    <div>
                      <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Unique Workflows</h3>
                      <p className="text-xs md:text-base">Effortlessly design unique workflows by integrating URL links and creating tailored prompts to enhance automation.</p>
                    </div>
                  </div>
                  <div className="flex items-start w-full md:w-[35vw]">
                    <img src="/icon-ai-2.svg" alt="Phone Icon" className="w-8 h-8 md:w-16 md:h-16 mr-4 md:mr-6 flex-shrink-0" />
                    <div>
                      <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Scheduled Q&A</h3>
                      <p className="text-xs md:text-base">Elevate customer interactions with scheduled Q&A sessions via phone, ensuring timely responses when needed.</p>
                    </div>
                  </div>
                  <div className="flex items-start w-full md:w-[35vw]">
                    <img src="/icon-ai-1.svg" alt="Reminder Icon" className="w-8 h-8 md:w-16 md:h-16 mr-4 md:mr-6 flex-shrink-0" />
                    <div>
                      <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Automatic Reminders</h3>
                      <p className="text-xs md:text-base">Stay organized with automatic reminders for important dates and tasks, keeping you updated and on track.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-0 px-4 md:px-0">
                <img src='/test-img-all.png' className='h-auto w-full object-cover rounded-lg shadow-lg scale-[0.9]' alt="Features" />
              </div>
            </div>
          </div>
          <img
            src="/elipse2.svg"
            alt="Lingkaran Detail"
            className="absolute hidden md:block"
            style={{
              top: '-70%',
              left: '-5%',
              width: '700px',
              height: '700px',
              transform: 'translate(-50%, 50%)',
              zIndex: -1,
            }}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-bold mb-8 text-center  fade-in">
        <img
          src="/elipse.svg"
          alt="Lingkaran Detail"
          className="absolute hidden md:block"
          style={{
            top: '500%',
            right: '-5%',
            width: '700px',
            height: '700px',
            transform: 'translate(50%, -50%)',
            zIndex: 0,
          }}
        />
        <img src="/choose.svg" alt="Icon" className="inline-block ml-2" />
      </h2>

      {/* Container */}
      <section className="features-section rounded-xl md:h-max mt-8 mb-20 fade-in px-4 md:px-0 md:flex md:justify-center md:items-center md:w-[100%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[24vh] md:w-[75vw]">
          <div className="flex flex-col items-start justify-center p-4 bg-opacity-10 bg-white rounded-lg">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-10">User-Friendliness</h3>
            <p className="text-xs md:text-base">The intuitive interface makes it easy for all users, even without a technical background, to take full advantage of our application's capabilities.</p>
          </div>
          <div className="flex flex-col items-start justify-center p-4 bg-opacity-10 bg-white rounded-lg">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-10">Superior Intelligence</h3>
            <p className="text-xs md:text-base">Our AI applications are designed with state-of-the-art technology that can process data quickly and accurately. This allows you to make better and faster decisions.</p>
          </div>
          <div className="flex flex-col items-start justify-center p-4 bg-opacity-10 bg-white rounded-lg">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-10">Security Guaranteed</h3>
            <p className="text-xs md:text-base">We prioritize your data security by using the latest security protocols that protect your business information from cyber threats.</p>
          </div>
        </div>
      </section>

      {/* video */}
      <div className="container-video">
        <iframe className="responsive-iframe"
          src="https://drive.google.com/file/d/1_4-bIX5w7sevni3X52u8K_Um6VEw-U2H/preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="bg-[#242424] w-full text-white py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
          <div className="flex flex-col">
            <a href="#" className="text-xl font-semibold">
              Agatha Apps
              <i className="fas fa-arrow-right ml-2" style={{ transform: 'rotate(-45deg)', }}></i>
            </a>
            <a href="https://manual-guide.vercel.app" className="text-xl font-semibold">
              Manual Guide
              <i className="fas fa-arrow-right ml-2" style={{ transform: 'rotate(-45deg)', marginTop: '4px' }}></i>
            </a>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-500">Contact : </h3>
            <p className="mt-2 text-lg">+6289672865080</p>
            <h3 className="mt-4 text-sm font-semibold text-gray-500">EMAIL</h3>
            <p className="mt-2 text-gray-400">agatha@gmail.com</p>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-500">Office Address : </h3>
            <p className="mt-2 text-gray-400">
              Mujur Street No. 45, Kroya, Cilacap
            </p>
          </div>

          <div className="col-span-1 flex flex-col items-end justify-between">
            <button className="p-2 bg-gray-600 rounded-full">
              <FaArrowUp />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
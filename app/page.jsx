"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

export default function Home() {
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
      <section id="home" className="flex flex-col md:flex-row items-center justify-between p-25 mt-40 fade-in">
        <div className="welcome-text">
          <img src="/welcome.svg" alt="Welcome to AGATHA" className="svg-large" />
          <a href="#" className="try-button bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            Try It For Free
            <i className="fas fa-arrow-right ml-2" style={{ transform: 'rotate(-45deg)', display: 'inline-block' }}></i>
          </a>
        </div>
        <div className="robot-container relative w-full">
          <img
            src="/elipse.svg"
            alt="Lingkaran Detail"
            className="absolute"
            style={{
              top: '70%',
              right: '-5%',
              width: '700px',
              height: '700px',
              transform: 'translate(50%, -50%)',
              zIndex: 1,
            }}
          />
          <img src="/gambar-about.png" alt="Background" className="robot-image" />
          <img src="/belakang-robot.png" alt="Robot" className="background-image" />
        </div>
      </section>

      {/* Introduction */}
      <section id="intro" className="p-10 text-center mt-25 fade-in">
        <h2 className="text-2xl font-bold mb-5 mt-40">
          <img src="/introduction.svg" alt="Icon" className="inline-block ml-2" />
        </h2>
        <p className="text-2xl mt-8">
          AGATHA (Adaptive Global Artificial Technology Hybrid Automation) is an innovative AI platform that transforms the way businesses operate with artificial intelligence. Designed to deliver adaptive, scalable, and globally applicable solutions, AGATHA improves efficiency and drives innovation across industries. Its focus on user empowerment and automation enables businesses to create AI workflows that fit their unique needs.
        </p>
        <img
            src="/elipse2.svg"
            alt="Lingkaran Detail"
            className="absolute"
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
      <section id="vision-mission" className="text-center fade-in mt-12">
        <h2 className="text-2xl font-bold mb-4">
          <img src="/vision.svg" alt="Icon" className="inline-block ml-2" />
        </h2>
        <p className="text-2xl mb-8 mt-8">
          &quot;To provide innovative solutions that empower businesses and individuals to achieve maximum efficiency and sustainable progress, with the ability for users to create and customize their own workflows.&quot;
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-40">
          <img src="/mission.svg" alt="Icon" className="inline-block ml-2" />
        </h2>
        <div className="container mt-8 p-6">
          <div className="flex justify-center space-x-12">
            <div className="flex flex-col items-center text-center fade-in">
              <Image src="/commitment.png" alt="Quality" width={67} height={50} />
              <p className="mt-2">Commitment to quality</p>
            </div>
            <div className="flex flex-col items-center text-center fade-in">
              <Image src="/education.png" alt="Education" width={86} height={50} />
              <p className="mt-2">Education and training</p>
            </div>
            <div className="flex flex-col items-center text-center fade-in">
              <Image src="/collab.png" alt="Collaboration" width={69} height={60} />
              <p className="mt-2">Collaboration and partnership</p>
            </div>
            <div className="flex flex-col items-center text-center fade-in">
              <Image src="/innovation.png" alt="Innovation" width={60} height={50} />
              <p className="mt-2">Cutting edge innovation</p>
            </div>
            <div className="flex flex-col items-center text-center fade-in">
              <Image src="/user.png" alt="User-1" width={95} height={50} />
              <p className="mt-2">User Empowerment</p>
            </div>
            <img
            src="/elipse.svg"
            alt="Lingkaran Detail"
            className="absolute"
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
      <h2 id="fitur" className="text-2xl font-bold mb-4 text-center mb-8 mt-40 fade-in">
        <img src="/feature.svg" alt="Icon" className="inline-block ml-2" />
      </h2>

      {/* Container untuk fitur-fitur */}
      <section className="features-section text-center rounded-xl mt-12 mb-5 fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start justify-center p-8">
            <Image src="/chat.png" alt="chat-ai" width={60} height={50} />
            <h3 className="text-xl font-bold mt-4 mb-2 text-left">Chat AI</h3>
            <p>Makes it easier to use with the help of AI</p>
          </div>
          <div className="flex flex-col items-start justify-center p-8 border-l-2 border-r-2 border-white">
            <Image src="/flow.png" alt="flow" width={70} height={50} />
            <h3 className="text-xl font-bold mb-2 mt-1">AI Flow Diagram</h3>
            <p>Facilitate the creation of flow diagrams with the help of AI</p>
          </div>
          <div className="flex flex-col items-start justify-center p-8">
            <Image src="/phone.png" alt="phone" width={60} height={50} />
            <h3 className="text-xl font-bold mb-2 mt-2">AI Phone</h3>
            <p>Can communicate with AI via phone</p>
          </div>
        </div>
      </section>

      {/* Amaze */}
      <section className="transparent-svg rounded-xl pt-1 fade-in">
        <div className="container mx-auto bg-transparent">
          <Image
            src="/amaze.svg"
            alt="Feature Image"
            layout="responsive"
            width={500}
            height={340}
            className="transparent-svg"
          />
          <img
            src="/elipse2.svg"
            alt="Lingkaran Detail"
            className="absolute"
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
      <h2 className="text-2xl font-bold mb-8 text-center mt-80 mb-10 fade-in">
        <img
          src="/elipse.svg"
          alt="Lingkaran Detail"
          className="absolute"
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
      <section className="features-section rounded-xl mt-8 mb-20 fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-3xl font-bold mt-4 mb-2 text-left mb-5">User-Friendliness</h3>
            <p className="text-left">The intuitive interface makes it easy for all users, even without a technical background, to take full advantage of our application&apos;s capabilities.</p>
            <div className="border-b-2 border-white p-4 w-full"></div>
          </div>
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-3xl font-bold mt-4 mb-2 text-left mb-5">Superior Intelligence</h3>
            <p className="text-left">Our AI applications are designed with state-of-the-art technology that can process data quickly and accurately. This allows you to make better and faster decisions.</p>
            <div className="border-b-2 border-white p-4 w-full"></div>
          </div>
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-3xl font-bold mt-4 mb-2 text-left mb-5">Security Guaranteed</h3>
            <p className="text-left">We prioritize your data security by using the latest security protocols that protect your business information from cyber threats.</p>
            <div className="border-b-2 border-white p-4 w-full"></div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testi" className="background-testi p-5 bg-black text-white mt-20 mb-60 fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="testimonial-card bg-white text-black p-6 rounded-lg shadow-md">
            <p className="mb-1 text-center">&quot;I&apos;ve been using this web hosting service for a few months now and overall it&apos;s been fine. The uptime has been good and I haven&apos;t had any major issues.&quot;</p>
            <div className="flex justify-center mt-40 mb-4">
              <span className="text-[#7A58FF] text-xl">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </span>
            </div>
            <div className="flex flex-col items-center mt-50">
              <Image src="/gb-testi.png" alt="Jane Smith" width={50} height={50} className="rounded-full" />
              <h4 className="font-bold mt-3">Jane Smith</h4>
              <p className="text-sm text-gray-500">Freelance Designer</p>
            </div>
          </div>

          <div className="testimonial-card bg-white text-black p-9 rounded-lg shadow-md">
            <p className="mb-20 text-center">&quot;The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.&quot;</p>
            <div className="flex justify-center mt-40 mb-4">
              <span className="mt-5 text-[#7A58FF] text-xl">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i> 
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/gb-testi.png" alt="Tom Williams" width={50} height={50} className="rounded-full" />
              <h4 className="font-bold mt-4">Tom Williams</h4>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>

          <div className="testimonial-card bg-white text-black p-6 rounded-lg shadow-md">
            <p className="mb-4 text-center">&quot;My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.&quot;</p>
            <div className="flex justify-center mt-40 mb-4">
              <span className="text-[#7A58FF] text-xl">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/gb-testi.png" alt="Michael Brown" width={50} height={50} className="rounded-full" />
              <h4 className="font-bold mt-4">Michael Brown</h4>
              <p className="text-sm text-gray-500">Entrepreneur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#242424] text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        <div className="flex flex-col">
          <a href="#" className="text-xl font-semibold">
            Agatha Apps
            <i className="fas fa-arrow-right ml-2" style={{ transform: 'rotate(-45deg)', }}></i>
          </a>
          <a href="https://manual-guide.vercel.app" className="text-xl font-semibold">
            Manual Guide
            <i className="fas fa-arrow-right ml-2" style={{ transform: 'rotate(-45deg)', marginTop: '4px'}}></i>
          </a>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Testimoni</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-sm font-semibold text-gray-500">Kontak yang bisa dihubungi : </h3>
          <p className="mt-2 text-lg">+6289672865080</p>
          <h3 className="mt-4 text-sm font-semibold text-gray-500">EMAIL</h3>
          <p className="mt-2 text-gray-400">agatha@gmail.com</p>
        </div>

        <div className="col-span-1">
          <h3 className="text-sm font-semibold text-gray-500">Alamat Kantor : </h3>
          <p className="mt-2 text-gray-400">
           JL Raya Mujur no 45 Kroya Cilacap
          </p>
        </div>

        <div className="col-span-1 flex flex-col items-end justify-between">
          <button className="p-2 bg-gray-600 rounded-full">
            <FaArrowUp />
          </button>
          <p className="text-sm text-gray-500">© 2023 — Copyright</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

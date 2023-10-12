 navbar :
 import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import logo from '../assets/11.png';
import {Link} from 'react-scroll'
import "../App.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMobileMenu = () => setIsOpen(false);

    return (
<nav className="bg-[#0a192f] p-5 shadow-md fixed top-0 left-0 w-full z-50 text-white text-shadow">


            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Company Logo" className="w-20 h-10 sm:w-18 sm:h-14" />
                    <span className="text-white font-bold text-xl sm:text-2xl">Octaverse<kbd>-LLP</kbd> </span>
                </div>

                <div className="block sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
                    </button>
                </div>

                <ul className="hidden sm:flex space-x-8">
                    {/* Desktop Nav Items */}
                    <li><a href="#home" className="text-white font-bold text-xl border-b-2 border-transparent hover:border-yellow-500">   
                         <Link to="home"  smooth={true} offset={50} duration={500} >Home</Link>
                     </a></li>
                    <li><a href="#about" className="text-white font-bold text-xl border-b-2 border-transparent hover:border-yellow-500">
                    <Link to="about"  smooth={true} offset={50} duration={500} >about</Link>
                        </a></li>
                    <li><a href="#services" className="text-white font-bold text-xl border-b-2 border-transparent hover:border-yellow-500">
                       <Link to="vision"  smooth={true} offset={50} duration={500} > Vision</Link>
                        </a></li>
    <li><a href="#services" className="text-white font-bold text-xl border-b-2 border-transparent hover:border-yellow-500">Services</a></li>
    <li><a href="#contact" className="text-white font-bold text-xl border-b-2 border-transparent hover:border-yellow-500">Contact</a></li>
                </ul>
            </div>

            {/* Mobile Nav Items with Animation */}
            <CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
                <ul className={`absolute top-full z-10 left-0 w-full flex  flex-col space-y-12 bg-white p-5 border-t-4 border-cyan-500 ${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <li><a href="#home" className="text-gray-700 hover:bg-gray-200 mx-12 p-2 rounded" onClick={closeMobileMenu}>Home</a></li>
                    <li><a href="#about" className="text-gray-700 hover:bg-gray-200 mx-12 p-2 rounded" onClick={closeMobileMenu}>About</a></li>
                    <li><a href="#services" className="text-gray-700 hover:bg-gray-200 mx-12 p-2 rounded" onClick={closeMobileMenu}>Services</a></li>
                    <li><a href="#contact" className="text-gray-700 hover:bg-gray-200 mx-12 p-2 rounded" onClick={closeMobileMenu}>Contact</a></li>
                </ul>
            </CSSTransition>
        </nav>
    );
}

export default Navbar;










hero:

import React, { useEffect, useState } from 'react';
import heroImage from '../assets/homepage2.jpg';  // Replace with the actual path to your image

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);
  

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const heroClass = `bg-center tp pt-20 bg-cover h-[630px] flex items-center justify-center transform transition-all duration-1000 ${fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;

  return (
    <section className={heroClass} name='home' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="text-center">
      <h1 className="text-5xl font-bold mb-4 text-white">Octaverse LLP</h1>
    <h2 className="text-3xl mb-6 text-white">Steering the Next Generation of Business Innovation.</h2>
    <p className="text-lg mb-8 mx-12 text-white">A blend of state-of-the-art business automation and innovative software solutions. Crafting a competitive edge in the digital age. Discover our uniqueness in bridging the gap between business and technology.</p>
    <button className="px-6 py-2 bg-[#98E4FF] text-black font-bold rounded-lg shadow-md hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none focus:shadow-outline-blue transition duration-300">
  Learn More
</button>

      </div>
    </section>
  );
}

export default Hero;


about :
import React from 'react';
import { FaRocket, FaWrench, FaBusinessTime, FaLightbulb } from 'react-icons/fa';

function About() {
    return (
        <div className='tp pt-20'>
           <div name="about" className="bg-gray-100 pt-32 min-h-screen p-8">
          <h1 className="text-4xl font-bold mb-10 text-center text-blue-600 transform transition-all duration-500 hover:scale-105 hover:text-blue-700">About Octaverse LLP</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Introduction Box */}
                <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <FaRocket className="text-blue-600 mb-4" size={32} />
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Introduction</h2>
                    <p className="text-blue-600">"Established in 2021, Octaverse IT is a premier software solutions provider, driving next-gen business innovation through advanced technology, automation, and expert consulting."</p>
                </div>

                {/* Specialization Box */}
                <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <FaWrench className="text-blue-600 mb-4" size={32} />
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Specialization</h2>
                    <p className="text-blue-600">"Leveraging new technologies, Octaverse LLP provides unique automation solutions for modern businesses, setting us apart with our distinctive products and expertise."</p>
                </div>

                {/* Enterprise Business Box */}
                <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <FaBusinessTime className="text-blue-600 mb-4" size={32} />
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Enterprise Business Software</h2>
                    <p className="text-blue-600">"Octaverse IT empowers mid-sized firms across sectors, enhancing growth and teamwork. Our services encompass all ERP facets, from strategy to daily operations."</p>
                </div>

                {/* Our Strategy Box */}
                <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <FaLightbulb className="text-blue-600 mb-4" size={32} />
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Strategy</h2>
                    <p className="text-blue-600">"Each company is distinct; we offer bespoke solutions. Leveraging our ERP expertise, we enhance IT systems for optimal client ROI."</p>
                </div>

            </div>
        </div>
        </div>
        
    );
}

export default About;


vision page:
import React, { useState } from 'react';
import { FaRocket } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';


function Vision() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="bg-blue-100  mt-5 p-10 rounded-lg shadow-md" name="vision">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Mission & Vision</h1>

      <div className="space-y-4">
        <div >
            <div className="flex justify-center"> <button
    onClick={() => setActiveDropdown(activeDropdown === "mission" ? null : "mission")}
    className="bg-blue-500 flex items-center justify-center text-white text-xl px-8 py-4 rounded-xl 
    transition-transform transition-300 transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg
     focus:outline-none focus:ring focus:ring-blue-300">
    <FaRocket className="mr-2" /> Our Mission
</button></div>
       

          {activeDropdown === "mission" && (
            <div className="mt-4 p-4 bg-white rounded-md shadow">
              {/* Mission content */}
          <p>Our primary mission at Octaverse LLP is to provide superior, thoroughly tested products and solutions for our valued customers. We pledge our commitment to delivering unparalleled business automation consultation, turnkey solutions, and unparalleled technical support. Our team, comprised of skilled consultants, engineers, developers, and executives, operates with cutting-edge managerial and IT tools, ensuring the punctual delivery of applications of the utmost quality.

</p>
            </div>
          )}
        </div>

        <div>
        <div className="flex justify-center">
        <button
          onClick={() => setActiveDropdown(activeDropdown === "vision" ? null : "vision")}
          className="bg-blue-500 flex items-center justify-center text-white text-xl px-8 py-4 rounded-xl transition-transform transition-300 transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
>
         <FaEye className="mr-2" /> Our Vision
        </button>
        </div>

          {activeDropdown === "vision" && (
            <div className="mt-4 p-4 bg-white rounded-md shadow">
              {/* Vision content */}
              <p>Octaverse LLP envisions being the foremost technology catalyst, forging the future path for our clients. We aspire to gain global recognition as an elite software development and technology provider, delivering inventive technical and business solutions. Our approach centers around adopting and implementing industry standards and leading-edge technology, ensuring our clients stay ahead in the constantly evolving technological landscape, receiving solutions that truly make a difference.</p>
            </div>
          )}
        </div>

        {/* ... Add other dropdown sections similarly */}
      </div>
    </div>
  );
}

export default Vision;

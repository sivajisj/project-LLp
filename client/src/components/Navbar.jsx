import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import logo from '../assets/logoV.jpg';
import { Link } from 'react-scroll'
import "../App.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMobileMenu = () => setIsOpen(false);

    return (
        <nav className="bg-[#0a192f] shadow-md fixed top-0 left-0 w-full z-50 text-white text-shadow">


            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Company Logo" className="w-20 h-20 sm:w-32 sm:h-24" />
                    <span className="text-white font-bold text-xl sm:text-2xl">Octaverse </span>
                </div>

                <div className="block sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
                    </button>
                </div>

                <ul className="hidden sm:flex space-x-8">
                    {/* Desktop Nav Items */}

                    <li>
                        <Link to="home" smooth={true} offset={50} duration={500} className="text-white cursor-pointer font-bold text-xl border-b-2 border-transparent hover:border-yellow-500" >
                                Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} offset={50} duration={500} className="text-white cursor-pointer font-bold text-xl border-b-2 border-transparent hover:border-yellow-500" >
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to="vision" smooth={true} offset={50} duration={500} className="text-white cursor-pointer font-bold text-xl border-b-2 border-transparent hover:border-yellow-500" >
                        Vision
                        </Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} offset={50} duration={500} className="text-white cursor-pointer font-bold text-xl border-b-2 border-transparent hover:border-yellow-500" >
                        Services
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} offset={50} duration={500} className=" cursor-pointer text-white font-bold text-xl border-b-2 border-transparent hover:border-yellow-500" >
                        Contact us
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Nav Items with Animation */}
            <CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
                <ul className={`absolute top-full z-10 left-0 w-full flex  flex-col space-y-12 bg-white p-5 border-t-4 border-cyan-500 ${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <li> <Link to="home" smooth={true} offset={50} duration={500} ><a href="#home" className="text-gray-700 hover:bg-gray-200 mx-12 p-2 rounded" onClick={closeMobileMenu}>Home</a> </Link></li>
                    <li> <Link to="about" smooth={true} offset={50} duration={500} ><a href="#about" className="text-gray-700 hover:bg-gray-200 mx-12 p-2 rounded" onClick={closeMobileMenu}>About</a> </Link></li>
                    <li> <Link to="services" smooth={true} offset={50} duration={500} ><a href="#services" className="text-gray-700 hover:bg-gray-200 mx-12 p-2 rounded" onClick={closeMobileMenu}>Services</a> </Link></li>
                    <li> <Link to="contact" smooth={true} offset={50} duration={500} ><a href="#contact" className="text-gray-700 hover:bg-gray-200 mx-12 p-2 rounded" onClick={closeMobileMenu}>Contact</a> </Link></li>
                </ul>
            </CSSTransition>
        </nav>
    );
}

export default Navbar;

import React from 'react';
import logo from '../assets/logoV.jpg';
import xlogo from '../assets/x.png'
import glogo from '../assets/github.png'
import ilogo from '../assets/ig.png'
import lilogo from '../assets/linkedin.png'
import flogo from '../assets/fb.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#176B87] text-white py-14">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Our Services</a></li>
                            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Affiliate Program</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Get Help</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
                            <li><a href="#" className="hover:text-gray-400">Shipping</a></li>
                            <li><a href="#" className="hover:text-gray-400">Returns</a></li>
                            <li><a href="#" className="hover:text-gray-400">Order Status</a></li>
                            <li><a href="#" className="hover:text-gray-400">Payment Options</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Legal Info</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Privacy-Policy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Dress</a></li>
                        </ul>
                    </div>

                    <div className="transition-transform duration-500 hover:scale-105">
                        <div className="flex items-center space-x-2 mb-6">
                            <img src={logo} alt="Company Logo" className="w-20 h-10 sm:w-18 sm:h-14 transform hover:scale-110 transition-transform duration-300" />
                            <span className="text-teal-200 font-bold text-xl sm:text-2xl">Octaverse</span>
                        </div>

                        <h4 className="font-semibold pt-2 text-lg mb-4">Follow Us</h4>
                        <div className="space-x-6 flex">
                            <ul className='flex space-x-2'>
                                <li className='bg-white rounded-md hover:bg-red-400'> <img src={xlogo} alt="twitterX" /></li>
                                <li className='bg-white rounded-md hover:bg-red-400'> <img src={lilogo} alt="linkedin" /></li>
                                <li className='bg-white rounded-md hover:bg-red-400'> <img src={flogo} alt="fb" /></li>
                                <li className='bg-white rounded-md hover:bg-red-400'> <img src={glogo} alt="github" /></li>
                                <li className='bg-white rounded-md hover:bg-red-400'> <img src={ilogo} alt="instagram" /></li>
                            </ul>
                            
                            {/* <a href="#" className="transition-transform duration-300 hover:scale-125 hover:text-red-400"><FaFacebookF /></a>
                            <a href="#" className="transition-transform duration-300 hover:scale-125 hover:text-red-400"><FaTwitter /></a>
                            <a href="#" className="transition-transform duration-300 hover:scale-125 hover:text-red-400"><FaInstagram /></a>
                            <a href="#" className="transition-transform duration-300 hover:scale-125 hover:text-red-400"><FaLinkedinIn /></a> */}
                        </div>
                        <p className="text-center py-4 text-white">
          &copy; {new Date().getFullYear()} Octaverse Associates. All rights reserved.
        </p>
                    </div>
         
                </div>
            </div>
        </footer>
    );
}

export default Footer;



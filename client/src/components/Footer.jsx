import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#176B87] text-white py-20">
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

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                        <div className="space-x-4 flex">
                            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
                            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
                            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
                            <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

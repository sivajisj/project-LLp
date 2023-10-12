import React from 'react';
import { FaRocket, FaWrench, FaBusinessTime, FaLightbulb } from 'react-icons/fa';

function About() {
    return (
       
           <div name="about" className="bg-gray-100 pt-32 min-h-screen p-8">
          <h1 className="text-4xl font-bold my-10 text-center text-blue-600 transform transition-all duration-500 hover:scale-105 hover:text-blue-700">About Octaverse LLP</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Introduction Box */}
                <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <FaRocket className="text-blue-600 mb-4" size={32} />
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Introduction</h2>
                    <p className="text-blue-600">"Established in 2021, Octaverse IT is a premier software solutions provider, driving next-gen business innovation through advanced technology, automation and expert consulting."</p>
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
      
        
    );
}

export default About;

import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import consulting from '../assets/consult2.jpg'
import softwareSolutionImg from '../assets/soft-sol.jpg';
import Outsourcing from '../assets/outsourcing.jpg';



function Services() {
  return (
    <section id="services" name="services" className="bg-blue-100 py-24">
      <h1 className="text-4xl font-bold text-center mb-12 ">SERVICES</h1>
      
      <div className="flex flex-wrap justify-center">
        
        {/* Consulting */}
        <ServiceCard title="Consulting" imageSrc={consulting}>
          <ul className="mt-4  space-y-2">
            <li>Business</li>
            <li>Technology</li>
            <li>Outsourcing</li>
            <li>IT Landscape</li>
            <li>Strategy and Architecture</li>
            <li>Digital Transformation</li>
            <li>Change and Learning</li>
          </ul>
        </ServiceCard>

        {/* Software Solution */}
        <ServiceCard title="Software Solution" imageSrc={softwareSolutionImg}>
          <ul className="mt-4 space-y-2">
            <li>SAP</li>
            <li>Oracle</li>
            <li>Microsoft Dynamics NAV</li>
            <li>Microsoft Dynamics AX</li>
            <li>Cloud Maintenance</li>
            <li>Testng</li>
            
          </ul>
          
        </ServiceCard>
        <ServiceCard title="Outsourcing" imageSrc={Outsourcing}>
          <ul className="mt-4 space-y-2">
            <li>Application Outsourcing</li>
            <li>Enterprise Mobility</li>
            <li>Resource & Staffing</li>
            <li>Microsoft Dynamics AX</li>
            <li>IT Infrastructure Services</li> 
    <li>Managed Security Services</li> 
            
          </ul>
          
        </ServiceCard>

        
        
      </div>

    </section>
  );
}

const ServiceCard = ({ title, children ,imageSrc}) => (
    <div className="bg-[#061446] text-white m-4 p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 w-80">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <img src={imageSrc} alt={title} className="mb-4 w-full h-36 mx-auto"/>
    {children}
    
    <button className="flex mt-2 items-center px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
      Explore Further <IoIosArrowForward className="ml-2" />
    </button>
  </div>
);

export default Services;

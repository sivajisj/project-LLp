import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import consulting from "../assets/consult2.jpg";
import softwareSolutionImg from "../assets/soft-sol.jpg";
import Outsourcing from "../assets/outsourcing.jpg";
import business from "../assets/business.jpg";
import downArrow from "../assets/down-arrow.png";
import cloud from "../assets/cloud.png"
import CMS from "../assets/cms.jpg"
import db from "../assets/db.png"
import ERP from "../assets/erp2.png"
import JAVA from "../assets/JAVA.jpg"
import MobileDevelopment from "../assets/MobileDevelopment.jpg"
import webDesign from "../assets/webDesign.jpg"
import WebService from "../assets/WebService.png"
import TestingImg from "../assets/Testing.jpg"
import LampImg from "../assets/Lamp.jpg"
import BigDataImg from "../assets/BigData.jpg"
import CRMImg from "../assets/crm.jpg"
import {Link} from 'react-scroll'


function Services() {
  return (
    <section id="services" name="services" className="bg-blue-100 py-24">
      <h1 className="text-4xl font-bold text-center mb-12 ">
        Service Offerings
      </h1>

      <div className="flex flex-wrap justify-center">
        {/* Consulting */}
        <ServiceCard title="Consulting" imageSrc={consulting}>
          <ul className="mt-4  space-y-2">
            <li> 🔸 Business</li>
            <li> 🔸 Technology</li>
            <li> 🔸 Outsourcing</li>
            <li> 🔸 IT Landscape</li>
            <li> 🔸 Strategy and Architecture</li>
            <li> 🔸 Digital Transformation</li>
            <li> 🔸 Change and Learning</li>
          </ul>
        </ServiceCard>

        {/* Software Solution */}
        <ServiceCard title="Software Solution" imageSrc={softwareSolutionImg}>
          <ul className="mt-4 space-y-2">
            <li> 🔸 SAP</li>
            <li> 🔸 Oracle</li>
            <li> 🔸 Microsoft Dynamics NAV</li>
            <li> 🔸 Microsoft Dynamics AX</li>
            <li> 🔸 Cloud Maintenance</li>
            <li> 🔸 Testng</li>
          </ul>
        </ServiceCard>
        <ServiceCard title="Outsourcing" imageSrc={Outsourcing}>
          <ul className="mt-4 space-y-2">
            <li> 🔸 Application Outsourcing</li>
            <li> 🔸 Enterprise Mobility</li>
            <li> 🔸 Resource & Staffing</li>
            <li> 🔸 Microsoft Dynamics AX</li>
            <li> 🔸 IT Infrastructure Services</li>
            <li> 🔸 Managed Security Services</li>
          </ul>
        </ServiceCard>
      </div>

      <div className="container mx-auto p-8">
        <div className="flex">
        <h1 className="text-5xl font-bold text-red-700 border-b pb-2 text-gradient bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text leading-tight tracking-wide shadow-md">
        And Services includes
          </h1>
         <img src={downArrow} className="w-16 h-16 animate-bounce" alt="down-arrow"/>
        </div>
     

        <div className="container mx-auto py-20 px-4">
            <h1 className="text-4xl font-bold text-blue-700 mb-8">
                Business Excellence with Our IT Solutions
            </h1>

            <div className="mb-8 md:flex items-center">
                <img
                    src={business}
                    alt="Business Excellence"
                    className="w-full md:w-1/2 object-cover rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
                />

                <div className="md:w-1/2">
                    <div className="mb-3 flex items-center">
                        <span className="text-3xl mr-2">🔐</span>
                        <p className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                            Deliver secure, reliable, and scalable applications for modern business excellence.
                        </p>
                    </div>

                    <div className="mb-3 flex items-center">
                        <span className="text-3xl mr-2">🎯</span>
                        <p className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                            Understand client requirements deeply for minimal time-to-market.
                        </p>
                    </div>

                    <div className="mb-3 flex items-center">
                        <span className="text-3xl mr-2">🌟</span>
                        <p className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                            Assure steady quality and high-quality deliverables.
                        </p>
                    </div>

                    <div className="mb-3 flex items-center">
                        <span className="text-3xl mr-2">📈</span>
                        <p className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                            Utilize OO methodologies for seamless integration and traceability across projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>

     

        {/* Technical Skills */}

        <div className="container mx-auto p-8 bg-gray-100">
        <h1 name="explore" className="text-4xl font-bold text-blue-700  pt-10 mb-8 border-b pb-2">
              More Skills We Support 
               </h1>
          

            <div className="grid md:grid-cols-2 gap-8">
                
                {/* Database Section */}
                <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                    <img src={db} alt="Database" className="absolute top-0 right-0 w-32 h-28 opacity-30" />
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">🖥️ Database</h2>
                    <p>Microsoft SQL Server, Oracle, SQLite, PL / SQL</p>
                </div>

             
                
                {/* ERP Section */}
                <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                    <img src={ERP} alt="ERP" className="absolute top-0 right-0  w-32 h-28 opacity-30" />
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">📊 ERP</h2>
                    <p>SAP, Microsoft Navision</p>
                </div>

                             {/* CMS Section */}
          <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                  <img src={CMS} alt="CMS" className="absolute top-0 right-0 w-32 h-30 opacity-30" />
                   <h2 className="text-2xl font-semibold text-blue-600 mb-4">📝 CMS</h2>
                   <p>Dot Net Nuke, Wordpress, Alfresco, Drupal, Joomla</p>
                  </div>

              {/* Cloud Platforms Section */}
                        <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                          <img src={cloud} alt="Cloud Platforms" className="absolute top-0 right-0 w-36 h-32 opacity-30" />
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4">☁️ Cloud Platforms</h2>
                        <p>Azure, Amazon, AWS</p>
                                        </div>

                 <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                     <img
                       src={WebService}
                       alt="Web Services"
                     className="absolute top-0 right-0 w-32 h-32 opacity-30"
                        />
                   <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                       🌍 Web Services
                       </h2>
                       <p>
                    SOA, REST, MVC 5.0, Razor views, C# / Visual Studio 2015, LINQ, Entity
                  Framework, WCF, MS-SQL, Nhibernate, Cloud / SaaS
                        </p>
                 </div>



      <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
        <img
          src={JAVA}
          alt="Java"
          className="absolute top-0 right-0 w-24 h-32 opacity-30"
        />
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">☕ Java</h2>
        <p>
          Eclipse 4.5, Hibernate, JSP / Servlets / JSF, LINQ, Struts, Spring
        </p>
      </div>




      <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
        <img
          src={webDesign}
          alt="Web Design"
          className="absolute top-0 right-0 w-32 h-32 opacity-30"
        />
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          🌐 Web Design
        </h2>
        <p>
          HTML5 / DHTML, CSS3, Javascript, Jquery, Angular JS, JSON, AJAX,
          CakePHP, Codeigniter, Responsive Web Design
        </p>
      </div>




      <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
        <img
          src={MobileDevelopment}
          alt="Mobile Development"
          className="absolute top-0 right-0 w-32 h-32 opacity-30"
        />
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          📱 Mobile Development
        </h2>
        <p>
          Android / Kitkat, iOS, WinCE, Xamarin, SQL Query, Google
          Maps/Geolocation
        </p>
      </div>


      <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
         <img src={TestingImg} alt="Testing Tools" className="absolute top-0 right-0 w-36 h-32 opacity-30" />
         <h2 className="text-2xl font-semibold text-blue-600 mb-4">🔍 Testing Tools</h2>
           <p>Jmeter, Junit, Mercury, Selenium, SoapUI, Regression Testing</p>
      </div>

      <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
       <img src={LampImg} alt="LAMP Stack" className="absolute top-0 right-0 w-32 h-32 opacity-30" />
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">💡 LAMP Stack</h2>
          <p>Linux, Apache, MySQL, PHP</p>
   </div>

              
   <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
            <img src={BigDataImg} alt="Big Data" className="absolute top-0 right-0 w-40 h-32 opacity-30" />
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">📊 Big Data</h2>
          <p>Hadoop, MongoDB</p>
    </div>


             <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                 <img src={CRMImg} alt="CRM" className="absolute top-0 right-0 w-32 h-32 opacity-30" />
               <h2 className="text-2xl font-semibold text-blue-600 mb-4">📞 CRM</h2>
               <p>Microsoft Dynamics CRM</p>
            </div>


  

            </div>
        </div>

        
      </div>
    </section>
  );
}

const ServiceCard = ({ title, children, imageSrc }) => (
  <div className="bg-[#061446] text-white m-4 p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 w-80">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <img src={imageSrc} alt={title} className="mb-4 w-full h-36 mx-auto" />
    {children}

    <button className="flex animate-pulse mt-4 items-center px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
     
      <Link to="explore" smooth={true} offset={50} duration={500} className="text-white hover:animate-pulse cursor-pointer font-bold text-xl border-b-2 border-transparent hover:border-yellow-500" >
      Explore Further
          </Link>
       <IoIosArrowForward className="ml-2" />
    </button>
  </div>
);

export default Services;


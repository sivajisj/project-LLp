import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import consulting from "../assets/consult2.jpg";
import softwareSolutionImg from "../assets/soft-sol.jpg";
import Outsourcing from "../assets/outsourcing.jpg";
import ERPlogo from "../assets/erp.jpg";
import downArrow from "../assets/down-arrow.png";

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
        <h1 className="text-5xl font-bold text-red-700 mb-8 border-b pb-2 text-gradient bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text leading-tight tracking-wide shadow-md">
        And Services includes
      </h1>
      <img src={downArrow} className="w-16 h-16 animate-bounce" alt="down-arrow"/>
        </div>
     


        {/* ERP Project Initiative */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">
            ERP Project Initiative
          </h2>
          <ul className="list-disc pl-5 text-blue-500">
            <li className="hover:text-blue-600 transition-colors duration-300">
              Complete the ERP Project on time
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Reduce the Project Total Cost of Ownership (TCO) by at least 20%
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Realize more tangible Return on Investment (ROI)
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Help organization improve business through ERP
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Reduce Risks involved in the Project
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Get client-ready in terms of Organization, People, Process, System
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Draft the Project Roadmap & Goals
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Set the right ERP Project Budget
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Identify Key ERP Business Requirements
            </li>
          </ul>
        </div>

        {/* Achieve ERP Goals */}
        <div className="mb-8 md:flex items-center">
          <img
            src={ERPlogo}
            alt="ERP Goals Image"
            className="w-full md:w-1/2 object-cover rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
          />

          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">
              Achieve ERP Goals
            </h2>

            <div className="mb-3 flex items-center">
              <span className="text-3xl mr-2">📊</span>
              <p className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                Centralized Data & Integrated System
              </p>
            </div>

            <div className="mb-3 flex items-center">
              <span className="text-3xl mr-2">💼</span>
              <p className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                Standardized Business Process
              </p>
            </div>

            <div className="mb-3 flex items-center">
              <span className="text-3xl mr-2">⛓️</span>
              <p className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                Integrate & Streamline Operation
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
              <div>
             
              </div>

        <div className="container mx-auto p-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-700 mx-24 pt-10 mb-8 border-b pb-2">
              More Skills We Support 
               </h1>
          

            <div className="grid md:grid-cols-2 gap-8">
                
                {/* Database Section */}
                <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                    <img src="/path-to-database-image.jpg" alt="Database" className="absolute top-0 right-0 w-32 h-32 opacity-10" />
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">🖥️ Database</h2>
                    <p>Microsoft SQL Server, Oracle, SQLite, PL / SQL</p>
                </div>

                {/* ... Add other sections similarly, changing the emoji, image path, heading, and text accordingly. */}
                
                {/* ERP Section */}
                <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                    <img src="/path-to-erp-image.jpg" alt="ERP" className="absolute top-0 right-0 w-32 h-32 opacity-10" />
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">📊 ERP</h2>
                    <p>SAP, Microsoft Navision</p>
                </div>

                             {/* CMS Section */}
          <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                  <img src="/path-to-cms-image.jpg" alt="CMS" className="absolute top-0 right-0 w-32 h-32 opacity-10" />
                   <h2 className="text-2xl font-semibold text-blue-600 mb-4">📝 CMS</h2>
                   <p>Dot Net Nuke, Wordpress, Alfresco, Drupal, Joomla</p>
                  </div>

              {/* Cloud Platforms Section */}
                        <div className="service-section relative p-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                          <img src="/path-to-cloud-image.jpg" alt="Cloud Platforms" className="absolute top-0 right-0 w-32 h-32 opacity-10" />
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4">☁️ Cloud Platforms</h2>
                        <p>Azure, Amazon, AWS</p>
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
      Explore Further <IoIosArrowForward className="ml-2" />
    </button>
  </div>
);

export default Services;

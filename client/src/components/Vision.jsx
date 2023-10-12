import React, { useState } from 'react';
import { FaRocket } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';


function Vision() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="bg-[#F99417]    mt-5 p-10 rounded-lg shadow-md" name="vision">
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

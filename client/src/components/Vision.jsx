import React, { useState } from 'react';
import { FaRocket, FaEye } from 'react-icons/fa';
import mission from "../assets/consult.jpeg"

function Vision() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const visionStyle = {
    backgroundImage: `url(${mission})`,
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',  
    backgroundPosition: 'center',  
  };
  return (
    <div style={visionStyle} className="  h-full p-10 rounded-lg  shadow-md" name="vision">
      <div className="flex justify-center items-center h-screen"> 
        <h1 className="inline-block text-5xl font-bold text-black bg-blue-200 p-4 mb-6 text-center" style={{ textShadow: '2px 2px 2px rgba(0,0,0,0.2)' }}>
          Mission & Vision
        </h1>
      </div>


      <div className="space-y-4">
        <div >
          <div className="flex justify-center"> <button
            onClick={() => setActiveDropdown(activeDropdown === "mission" ? null : "mission")}
            className="bg-blue-500 flex items-center justify-center text-white text-3xl px-8 py-4 rounded-xl 
    transition-transform transition-300 transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg
     focus:outline-none focus:ring focus:ring-blue-300">
            <FaRocket className="mr-2" /> Our Mission
          </button></div>


          {activeDropdown === "mission" && (
            <div className="mt-4 p-4 bg-white rounded-md shadow">
              {/* Mission content */}
              <p className='vis'>At Octaverse LLP, our main goal is to deliver top-tier business automation consulting. We guide clients through the IT maze, supported by expert consultants and developers. Leveraging cutting-edge tools and our deep expertise, we craft and fine-tune premier solutions. Beyond just creating, we ensure unwavering technical support. Together, we pioneer the next wave of business automation, positioning our clients at technology's forefront.

              </p>
            </div>
          )}
        </div>

        <div>
          <div className="flex justify-center">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "vision" ? null : "vision")}
              className="bg-blue-500 flex items-center justify-center text-white text-3xl px-8 py-4 rounded-xl transition-transform transition-300 transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <FaEye className="mr-2" /> Our Vision
            </button>
          </div>

          {activeDropdown === "vision" && (
            <div className="mt-4 p-4 bg-white rounded-md shadow">
              {/* Vision content */}
              <p className='vis'>Octaverse LLP envisions being the foremost technology catalyst, forging the future path for our clients. We aspire to gain global recognition as an elite software development and technology provider, delivering inventive technical and business solutions. Our approach centers around adopting and implementing industry standards and leading-edge technology, ensuring our clients stay ahead in the constantly evolving technological landscape, receiving solutions that truly make a difference.</p>
            </div>
          )}
        </div>

        {/* ... Add other dropdown sections similarly */}
      </div>
    </div>
  );
}

export default Vision;

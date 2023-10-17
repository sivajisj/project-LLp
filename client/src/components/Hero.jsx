
import React, { useEffect, useState } from 'react';
import heroImage from '../assets/homepage2.jpg';  
import {Link} from "react-scroll"

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);
  

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const heroClass = `bg-center pt-20 tp bg-cover h-[630px] flex items-center justify-center transform transition-all duration-1000 ${fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;

  return (
    <section className={heroClass} name='home' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="text-center">
      <h1 className="text-5xl font-bold mb-4 text-white">Octaverse LLP</h1>
    <h2 className="text-3xl mb-6 text-white">Steering the Next Generation of Business Innovation.</h2>
    <p className="text-lg mb-8 mx-12 text-white">A blend of state-of-the-art business automation and innovative software solutions. Crafting a competitive edge in the digital age. Discover our uniqueness in bridging the gap between business and technology.</p>
    <button className="px-6 py-2  bg-[#98E4FF] text-black font-bold rounded-lg shadow-md hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none focus:shadow-outline-blue transition duration-300">

<Link to="learnMore" smooth={true} offset={50} duration={500} className="text-gray hover:animate-pulse cursor-pointer font-bold text-xl border-b-2 border-transparent hover:border-yellow-500" >
Learn More
</Link>
</button>

      </div>
    </section>
  );
}

export default Hero;


import './App.css'
import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Services from './components/Services'
import Contact from './components/contact'
import Footer from './components/Footer'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds for demo
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
     
    {loading ? <LoadingAnimation /> : <MainContent/> }
   
    <Navbar/>
    <Hero/>
    <About/>
    <Vision/>
   <Services/>
   <Footer/>
   <Contact/>
    </>
  )
}


function LoadingAnimation() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loader w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="opacity-0 transform scale-90 transition-all duration-1000 ease-out animate-fadeInScale">
      {/* Rest of your main content */}
      <h1 class="text-6xl font-bold text-center text-blue-600 transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-2xl">
    Your App Content Here
</h1>

    </div>
  );
}

export default App
import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Services from './components/Services'
import WhyOctaverse from './components/WhyOctaverse'
import Footer from './components/Footer'
import Contact from './components/WhyOctaverse'
const MainComponent = () => {
  return (
   <>
     <Navbar/>
    <Hero/>
    <About/>
    <Vision/>
   <Services/>
   <WhyOctaverse/>
   <Footer/>
  
   <Contact/> 
   </>
  
  )
}

export default MainComponent
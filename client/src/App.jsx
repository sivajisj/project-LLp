
import './App.css'
import React from 'react';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Services from './components/Services'
import Contact from './components/contact'
import Footer from './components/Footer'
import WhyOctaverse from "./components/WhyOctaverse"

const App = () => {
 
  return (
    <>
     
    {/* {loading ? <LoadingAnimation /> : <MainContent/> } */}
   
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




export default App

import './App.css'

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Services from './components/Services'
import Contact from './components/contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
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

export default App
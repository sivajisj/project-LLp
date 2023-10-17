
import './App.css'
import React, { useState, useEffect } from 'react';
import LoadingScreen from './Loadingscreen';
import MainComponent from './MainComponent';


const App = () => {
   
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Simulate a network request with a 3s delay
      setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <>
     
    {/* {loading ? <LoadingAnimation /> : <MainContent/> } */}
{/*    
   */}
     {isLoading ? <LoadingScreen /> : <MainComponent/>}
   
    </>
  )
}




export default App
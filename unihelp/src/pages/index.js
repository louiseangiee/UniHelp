import React, { useState ,useEffect} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { InfoSection1, InfoSection2, InfoSection3 } from '../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../components/InfoSection/Data';
import Services from '../components/Services';
import toast, { Toaster } from 'react-hot-toast';
import { ReactSession } from 'react-client-session';
ReactSession.setStoreType("localStorage");


function Home() {

  useEffect(() => { 
    while(ReactSession.get("isLoggedout")){
    toast.success('You have successfully logged out') 
    ReactSession.set("isLoggedout", false)
    }
  }, console.log('error'));


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          // Default options for specific types
          success: {
            duration: 2000,
          },
          style: {
            border: '2px solid #5271ff',
            padding: '16px',
          },
        }}
      />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection1 {...homeObjOne} />
      <InfoSection2 {...homeObjTwo} />
      <Services />
      <InfoSection3 {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
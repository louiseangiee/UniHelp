import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import SchoolSidebar from '../components/SchoolSidebar';

function MainPage() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
   <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    {/* <SchoolSidebar /> */}
    <Services />
    <Footer />
   </> 
  )
}

export default MainPage;
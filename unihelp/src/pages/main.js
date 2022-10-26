import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import Services from '../components/Services';
// import SchoolTabs from '../components/SchoolTabs';

function MainPage() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
   <>
    <SidebarHome isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    {/* <SchoolTabs /> */}
    
    <Services />
    <Footer />
   </> 
  )
}

export default MainPage;
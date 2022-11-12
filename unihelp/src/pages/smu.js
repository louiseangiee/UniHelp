import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import DataVisualisation from '../components/MUDataVisualisation';

function SMU() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
   <>
    <SidebarHome isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    <DataVisualisation />
    <Footer />
   </> 
  )
}

export default SMU;
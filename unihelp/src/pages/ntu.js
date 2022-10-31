import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import DataVisualisation from '../components/MUDataVisualisation';

function NTU() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
   <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    <DataVisualisation />
    <Footer />
   </> 
  )
}

export default NTU;
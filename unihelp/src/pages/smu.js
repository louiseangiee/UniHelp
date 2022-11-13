import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import DataVisualisation from '../components/MUDataVisualisation';
import Checklist from '../components/Checklist/checklist';

function SMU() {
  const [isOpen, setIsOpen]  = useState(false);

  const uni = 'smu'

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
   <>
    <SidebarHome isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    {uni && <DataVisualisation uni = {uni} />}
    <Footer />
   </> 
  )
}

export default SMU;
import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import DataVisualisation from '../components/MUDataVisualisation';
import BigCalendar from '../components/Calendar';

function SMU() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
   <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    <DataVisualisation />
    <BigCalendar uni="smu" />
    <Footer />
   </>
  )
}

export default SMU;
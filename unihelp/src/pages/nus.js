import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import DataVisualisation from '../components/MUDataVisualisation';
import QuickChart from '../components/QuickChart';
import BigCalendar from '../components/Calendar';
import Checklist2 from '../components/Checklist2';

function NUS() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
   <>
    <SidebarHome isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    <DataVisualisation />
    <QuickChart />
    <BigCalendar uni="nus"/>
    <Checklist2 />

    <Footer />
   </> 
  )
}

export default NUS;
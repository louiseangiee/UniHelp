import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import DataVisualisation from '../components/MUDataVisualisation';
import QuickChart from '../components/QuickChart';
import BigCalendar from '../components/Calendar';
import GetScore from '../components/QuickChart'
function NUS() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
   <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    <DataVisualisation />
    <GetScore />
    <BigCalendar uni="nus"/>
    <Footer />
   </> 
  )
}

export default NUS;
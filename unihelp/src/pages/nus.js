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
  const uni = 'nus'
  console.log()
  return (
   <>
    <SidebarHome  isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    {uni && <DataVisualisation uni = {uni} />}
    <QuickChart uni = {uni} qualification = {qualification} HSorEnglish = "HS"/>
    <QuickChart uni = {uni} qualification = {qualification} HSorEnglish = "English"/>

    { <BigCalendar uni = {uni}/>}
    { <Checklist2 /> }

    <Footer />
   </> 
  )
}

export default NUS;
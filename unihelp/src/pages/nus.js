import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import DataVisualisation from '../components/MUDataVisualisation';
import QuickChart from '../components/QuickChart';
import BigCalendar from '../components/Calendar';
import Checklist2 from '../components/Checklist2';
import { ReactSession } from "react-client-session";
import DropdownMyUni from '../components/DropdownMyUni';

function NUS() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const uni = 'nus'

  ReactSession.setStoreType("localStorage");
  const qualification = ReactSession.get("qualification")
  const englishTest = ReactSession.get("englishTest")

  console.log()
  return (
   <>
    <SidebarHome  isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    {uni && <DataVisualisation uni = {uni} />}
    <DropdownMyUni> </DropdownMyUni>
    <QuickChart uni = {uni} qualification = {qualification} HSorEnglish = "HS"/>
    <QuickChart uni = {uni} qualification = {englishTest} HSorEnglish = "English"/>

    { <BigCalendar uni = {uni}/>}
    { <Checklist2 /> }

    <Footer />
   </> 
  )
}

export default NUS;
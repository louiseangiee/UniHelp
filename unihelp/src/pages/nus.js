import React, { useEffect, useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import DataVisualisation from '../components/MUDataVisualisation';
import GradeChart from '../components/GradeChart';
import BigCalendar from '../components/Calendar';
import Checklist2 from '../components/Checklist2';
import { ReactSession } from "react-client-session";
import DropdownMyUni from '../components/DropdownMyUni';
import EnglishChart from '../components/EnglishChart';

function NUS() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const [qualification, setQualification] = useState(null);
  const [englishTest, setEnglishTest] = useState(null)
  const uni = 'nus'
  useEffect(() => {
    ReactSession.setStoreType("localStorage");
    console.log(ReactSession.get("qualification"))
    setQualification(ReactSession.get("qualification"))
    //console.log(qualification)
    setEnglishTest(ReactSession.get("englishTest"))
    //console.log(englishTest)
  }, [uni])
  console.log(qualification)
  return (
    <>
      <SidebarHome isOpen={isOpen} toggle={toggle} />
      <NavbarMain toggle={toggle} />
      {uni && <DataVisualisation uni={uni} />}
      <DropdownMyUni> </DropdownMyUni>
      <GradeChart uni={uni} qual={qualification} />
      <EnglishChart uni={uni} qual={englishTest} />

      {<BigCalendar uni={uni} />}
      {<Checklist2 uni={uni} />}

      <Footer />
    </>
  )
}

export default NUS;
import React, { useEffect, useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import DataVisualisation from '../components/MUDataVisualisation';
import GradeChart from '../components/GradeChart';
import BigCalendar from '../components/Calendar';
import Checklist2 from '../components/Checklist2';
import { ReactSession } from "react-client-session";
//import DropdownMyUni from '../components/DropdownMyUni';
import EnglishChart from '../components/EnglishChart';
import Form from 'react-bootstrap/Form';
import { EnglishArray, EnglishTest } from '../components/EnglishTest';
import { HighSchoolQualification, HighSchoolQualificationArray } from '../components/HighSchoolQualification';

/*
function DropdownMyUni() {
  ReactSession.setStoreType("localStorage");
  const [qualification, setQualification] = useState('');
  const [englishTest, setEnglishTest] = useState('');
  ReactSession.set("qualification", qualification);
  ReactSession.set("englishTest", englishTest);
  //console.log(ReactSession.get("qualification"))
  //console.log(ReactSession.get("englishTest"))
  return (
      <>
          
      </>
  );

}
*/

function NUS() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const [qualification, setQualification] = useState(null);
  const [englishTest, setEnglishTest] = useState(null)
  const uni = 'nus'
  console.log(qualification)
  console.log(englishTest)
  // console.log(ReactSession.get('qualification'))
  /* 
  useEffect(() => {
    //ReactSession.setStoreType("localStorage");
    setQualification(ReactSession.get("qualification"))
    console.log(qualification)
    //setEnglishTest(ReactSession.get("englishTest"))
    //console.log(englishTest)
    //console.log(qualification)
  }, [qualification, englishTest]) */
  
  return (
    <>
      <SidebarHome isOpen={isOpen} toggle={toggle} />
      <NavbarMain toggle={toggle} />
      {uni && <DataVisualisation uni={uni} />}
      <>
          <Form.Group className="mb-3 col-6" controlId="select">
              <Form.Label>Academic Qualification Submitted</Form.Label>
              <Form.Control as="select"
                  onChange={(e) => setQualification(e.target.value) } value={qualification}>
                  {HighSchoolQualificationArray.map((qualification) =>
                      <option key={qualification}>{qualification}</option>
                  )}
              </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 col-6" controlId="select">
              <Form.Label>English Test Submitted</Form.Label>
              <Form.Control as="select"
                  onChange={(e) => setEnglishTest(e.target.value)} value={englishTest}>
                  {EnglishArray.map((qualification) =>
                      <option key={qualification}>{qualification}</option>
                  )}
              </Form.Control>
          </Form.Group>
      </>

      {uni && qualification && <GradeChart uni={uni} qual={qualification} />}
      {uni && englishTest && <EnglishChart uni={uni} qual={englishTest} />}

      {<BigCalendar uni={uni} />}
      {<Checklist2 uni={uni} />}

      <Footer />
    </>
  )
}

export default NUS;
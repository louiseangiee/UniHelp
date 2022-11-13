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

function NUS() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const [qualification, setQualification] = useState({'Cambridge A Level': {'min': 0, 'max': 90}});
  const [englishTest, setEnglishTest] = useState({'IELTS': {'min': 1, 'max': 9}})
  const uni = 'smu'
  console.log(qualification)
  console.log(englishTest)

  
  return (
    <>
      <SidebarHome isOpen={isOpen} toggle={toggle} />
      <NavbarMain toggle={toggle} />
      {uni && <DataVisualisation uni={uni} />}
      <div
        className="row d-flex justify-content-around"
        style={{
          backgroundColor: "#F2F2F2",
          borderRadius: "10px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <div className="col-12 mt-3">
          <div
            className="charts row d-flex justify-content-between"
            style={{ marginLeft: "12px", marginRight: "12px", marginBottom: "12px"}}
          >
            <div
              className="col d-flex flex-column justify-content-center align-items-center py-3"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }}
            >
              <Form.Group
                className="mb-3 col-6 d-flex flex-column justify-content-center align-items-center"
                controlId="select"
              >
                <Form.Label>
                  <strong>Academic Qualification</strong>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setQualification(e.target.value)}
                  value={qualification}
                >
                  {HighSchoolQualificationArray.map((qualification) => (
                    <option key={qualification}>{qualification}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              {uni && qualification && (
                <GradeChart uni={uni} qual={qualification} />
              )}
            </div>
            <div
              className="col d-flex flex-column justify-content-center align-items-center py-3"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                marginLeft: "12px",
              }}
            >
              <Form.Group
                className="mb-3 col-6 d-flex flex-column justify-content-center align-items-center"
                controlId="select"
              >
                <Form.Label>
                  <strong>English Test</strong>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setEnglishTest(e.target.value)}
                  value={englishTest}
                >
                  {EnglishArray.map((qualification) => (
                    <option key={qualification}>{qualification}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              {uni && englishTest && (
                <EnglishChart uni={uni} qual={englishTest} />
              )}
            </div>
          </div>
          <div
            className="row d-flex justify-content-between"
            style={{ marginLeft: "12px", marginRight: "12px", marginTop: "12px", marginBottom: "16px" }}
          >
            <div
              className="col d-flex flex-column justify-content-center align-items-center py-3"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "10px", marginRight: "12px" }}
            >
              {<Checklist2 uni={uni} />}
            </div>
            <div
              className="col d-flex flex-column justify-content-center align-items-center py-3"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }}
            >
              {<BigCalendar uni={uni} />}
            </div>
          </div>
        </div>
        {/* <div className="col-6 mb-3 d-flex justify-content-around">
        
        </div>
        <div className="col-6 mb-3">
        
        </div> */}
      </div>

      <Footer />
    </>
  )
}

export default NUS;
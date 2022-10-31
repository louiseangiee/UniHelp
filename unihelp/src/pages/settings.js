import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './stylesheets/submit-results.css';


function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarMain toggle={toggle} />

      <div id="form" class="px-5 container col-xl-7">
        <h1 class="header mx-0 px-0">Settings</h1>

        <Form>
          <div className="row">

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Samuel No Surname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control type="text" placeholder="samuel.2021@business.smu.edu.sg" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="select">
              <Form.Label>Are you a</Form.Label>
              <Form.Control as="select">
                <option>Local Student</option>
                <option>International Student</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="select">
              <Form.Label>High School Qualification</Form.Label>
              <Form.Control as="select">
                <option disabled selected>-- select an option --</option>
                <option>International Baccalaureate</option>
                <option>Cambridge A Level</option>
                <option>Indonesian Ujian Nasional</option>
                <option>SAT</option>
                <option>ACT</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="select">
              <Form.Label>English Proficiency Test</Form.Label>
              <Form.Control as="select">
                <option disabled selected>-- select an option --</option>
                <option>IELTS</option>
                <option>TOEFL</option>
                <option>TOEIC</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="DateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="DateOfGrad">
              <Form.Label>Expected Graduation Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </div>

          <div className="row">
            <Button className="mb-3" variant="primary" type="submit">
              Save Changes
            </Button>
          </div>
        </Form>
      </div>

      <Footer />
    </>
  )
}

export default Settings;
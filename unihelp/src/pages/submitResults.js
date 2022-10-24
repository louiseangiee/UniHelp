import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './stylesheets/submit-results.css';




function SubmitResults() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
   <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />

    <div id="form" class="px-5">
      <h1 class ="header">Submit Your Results</h1>

      <Form>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>University/College</Form.Label>
          <Form.Control type="text" placeholder="e.g. Singapore Management University" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Program</Form.Label>
          <Form.Control type="text" placeholder="e.g. Computer Science" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="select">
          <Form.Label>Admit Year</Form.Label>
          <Form.Control as="select">
            <option disabled selected>-- select an option --</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nationality</Form.Label>
          <Form.Control type="text" placeholder="e.g. Indonesian" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="select">
          <Form.Label>Admission Status</Form.Label>
          <Form.Control as="select">
            <option disabled selected>-- select an option --</option>
            <option>Admitted</option>
            <option>Interviewed</option>
            <option>Rejected</option>
            <option>Waitlisted</option>
          </Form.Control>
        </Form.Group>

        <div className="row"> 

        <Form.Group className="mb-3 col-6" controlId="select">
          <Form.Label>Academic Qualification Submitted</Form.Label>
          <Form.Control as="select">
            <option disabled selected>-- select an option --</option>
            <option>International Baccalaureate</option>
            <option>Cambridge A Level</option>
            <option>Indonesian Ujian Nasional</option>
            <option>SAT</option>
            <option>ACT</option>
            <option>IELTS</option>
            <option>TOEFL</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3 col-6" controlId="formBasicText">
          <Form.Label>Grade</Form.Label>
          <Form.Control type="text" placeholder="e.g. 90" />
        </Form.Group>
        </div>

        <div className="row"> 

        <Button className="mb-3" variant="warning" type="button">
          Add Another Qualification 
        </Button>

        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
        </div>

      </Form>
    </div>


    <Footer />
   </> 
  )
}

export default SubmitResults;
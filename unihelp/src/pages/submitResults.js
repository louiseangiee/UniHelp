import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './stylesheets/submit-results.css';
import React, { useState, useEffect } from "react";
import { useFirestore } from '../hooks/useFirestore'
import { useAuthContext } from '../hooks/useAuthContext'
import {countryList} from '../components/Countries'
import { schoolsAndMajors } from '../components/Majors';


const SubmitResults = () => {
  const { addDocument, response } = useFirestore('results')

  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const [university, setUniversity]  = useState('');
  const [program, setProgram]  = useState('');
  const [admitYear, setAdmitYear]  = useState('');
  const [nationality, setNationality]  = useState('');
  const [status, setStatus]  = useState('');
  const [qualification, setQualification]  = useState('');
  const [grade, setGrade]  = useState('');
  const [englishTest, setEnglishTest]  = useState('');
  const [englishGrade, setEnglishGrade]  = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const { user } = useAuthContext()


  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = []
    setErrorMessage('')

    if(university === ''){
      error = [...error, 'university']
    } 
    if(program === ''){
      error = [...error, 'program']
    } 
    if(admitYear === ''){
      error = [...error, 'admit year']
    } 
    if(nationality === ''){
      error = [...error, 'nationality']
    } 
    if(status === ''){
      error = [...error, 'student status']
    }
    if(qualification === ''){
      error = [...error, 'qualification']
    }
    if(grade === ''){
      error = [...error, 'qualification grade']
    }
    if(englishTest === ''){
      error = [...error, 'english test']
      console.log(englishTest)
    }
    if(englishTest !== 'Inapplicable' && englishGrade === ''){
      error = [...error, 'english grade']
    }
    
  
    console.log(error)

    if(error.length > 0){
      setErrorMessage('Please fill in ' + error.join(', '))
      return
    } 

    await addDocument({
    university, 
    program,
    admitYear,
    nationality,
    status,
    qualification,
    grade,
    englishTest,
    englishGrade
    })

    alert('Results submitted')
    
  };

  useEffect(() => {
    if (response.success) {
      setUniversity(''); setProgram(''); setAdmitYear(''); setNationality(''); setStatus(''); setQualification(''); 
      setGrade(''); setEnglishTest(''); setEnglishGrade(''); 

    }
  }, [response.success])


  return (
   <>
    <SidebarHome isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />

    <div id="form" class="px-5 container col-xl-7">
      <h1 class ="mx-0 px-0 pt-5 header">Submit Your Results</h1>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="select">
          <Form.Label>University/College</Form.Label>
          <Form.Control as="select" required
            onChange={(e)=> setUniversity(e.target.value)} value={university}>
            <option selected></option>
            <option>Singapore Management University</option>
            <option>Nanyang Technological University</option>
            <option>National University of Singapore</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Program</Form.Label>
          <Form.Control as="select" 
            onChange={(e) => setProgram(e.target.value)} value = {program}>
          <option selected></option>
          {schoolsAndMajors[university].map((major) => <option key={university+major}>{major}</option>)}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="select">
          <Form.Label>Admit Year</Form.Label>
          <Form.Control as="select" 
            onChange={(e)=> setAdmitYear(e.target.value)} value={admitYear}>
            <option selected></option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nationality</Form.Label>
          <Form.Control as="select"
            onChange={(e) => setNationality(e.target.value)} value = {nationality}>
            <option selected></option>
            {countryList.map((countries) => <option>{countries}</option>)}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="select">
          <Form.Label>Admission Status</Form.Label>
          <Form.Control as="select"
            onChange={(e)=> setStatus(e.target.value)} value={status}>
            <option selected></option>
            <option>Admitted</option>
            <option>Interviewed</option>
            <option>Rejected</option>
            <option>Waitlisted</option>
          </Form.Control>
        </Form.Group>

        <div className="row"> 

        <Form.Group className="mb-3 col-6" controlId="select">
          <Form.Label>Academic Qualification Submitted</Form.Label>
          <Form.Control as="select"
            onChange={(e)=> setQualification(e.target.value)} value={qualification}>
            <option selected></option>
            <option>International Baccalaureate</option>
            <option>Cambridge A Level</option>
            <option>Indonesian Ujian Nasional</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3 col-6" controlId="formBasicText">
          <Form.Label>Grade</Form.Label>
          <Form.Control type="number" 
          onChange={(e) => setGrade(e.target.value)}
          value = {grade} 
          placeholder="e.g. 90" />
        </Form.Group>
        </div>

        <div className="row"> 

        <Form.Group className="mb-3 col-6" controlId="select">
          <Form.Label>English Test Submitted</Form.Label>
          <Form.Control as="select"
            onChange={(e)=> setEnglishTest(e.target.value)} value={englishTest}>
            <option selected></option>
            <option>IELTS</option>
            <option>TOEFL</option>
            <option>Inapplicable</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3 col-6" controlId="formBasicText">
          <Form.Label>Grade</Form.Label>
          <Form.Control type="number" 
          disabled = {englishTest === 'Inapplicable' || englishTest === '' ? true:false}
          onChange={(e) => setEnglishGrade(e.target.value)}
          value = {englishTest === 'Inapplicable' || englishTest === '' ? '' : englishGrade} 
          placeholder="e.g. 7" />
        </Form.Group>
        </div>

        

        <div className="row"> 

        {/* <Button className="mb-3" variant="warning" type="button">
          Add Another Qualification 
        </Button> */}

        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}

      </Form>
    </div>


    <Footer />
   </> 
  )
}

export default SubmitResults;
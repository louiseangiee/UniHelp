import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './stylesheets/submit-results.css';
import React, { useState, useEffect } from "react";
import { useFirestore } from '../hooks/useFirestore'
import { useAuthContext } from '../hooks/useAuthContext'
import { schoolsAndMajors } from '../components/Majors';
import toast, { Toaster } from 'react-hot-toast';
import { HighSchoolQualification, HighSchoolQualificationArray } from '../components/HighSchoolQualification';
import { EnglishArray, EnglishTest } from '../components/EnglishTest';


const SubmitResults = () => {
  const { addDocument, response } = useFirestore('results')

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const [university, setUniversity] = useState('');
  const [program, setProgram] = useState('');
  const [admitYear, setAdmitYear] = useState('');
  const [status, setStatus] = useState('');
  const [qualification, setQualification] = useState('');
  const [grade, setGrade] = useState('');
  const [englishTest, setEnglishTest] = useState('');
  const [englishGrade, setEnglishGrade] = useState('');

  const { user } = useAuthContext()


  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = []


    if (university === '') {
      error = [...error, 'university']
    }
    if (program === '') {
      error = [...error, 'program']
    }
    if (admitYear === '') {
      error = [...error, 'admit year']
    }
    if (status === '') {
      error = [...error, 'student status']
    }
    if (qualification === '') {
      error = [...error, 'qualification']
    }
    if (grade === '') {
      error = [...error, 'qualification grade']
    }
    if (englishTest === '') {
      error = [...error, 'english test']
      console.log(englishTest)
    }
    if (englishTest !== 'Inapplicable' && englishGrade === '') {
      error = [...error, 'english grade']
    }


    console.log(error)

    if (error.length > 0) {
      toast.error('Please fill in ' + error.join(', '))
      return
    }

    await addDocument({
      university,
      program,
      admitYear,
      status,
      qualification,
      grade,
      englishTest,
      englishGrade
    })

    toast.success('You have successfully submit your results!')

  };

  useEffect(() => {
    if (response.success) {
      setUniversity(''); setProgram(''); setAdmitYear(''); setStatus(''); setQualification('');
      setGrade(''); setEnglishTest(''); setEnglishGrade('');

    }
  }, [response.success])


  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          // Default options for specific types
          success: {
            duration: 2000,
          }, error:{
            duration: 2000,
          },
          style: {
            border: '2px solid #5271ff',
            padding: '16px',
          },
        }}
      />
      <SidebarHome isOpen={isOpen} toggle={toggle} />
      <NavbarMain toggle={toggle} />

      <div id="form" class="px-5 container col-xl-7" style={{position: "relative",height:'100vh', overflow:'scroll'}}>
        <h1 class="header mx-0 px-0">Submit Your Results</h1>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="select">
            <Form.Label>University/College</Form.Label>
            <Form.Control as="select" required
              onChange={(e) => setUniversity(e.target.value)} value={university}>
              <option selected></option>
              <option>Singapore Management University</option>
              <option>Nanyang Technological University</option>
              <option>National University of Singapore</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Program</Form.Label>
            <Form.Control as="select"
              onChange={(e) => setProgram(e.target.value)} value={program}>
              <option disabled selected>Select university first</option>
              {schoolsAndMajors[university].map((major) => <option key={university + major}>{major}</option>)}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="select">
            <Form.Label>Admit Year</Form.Label>
            <Form.Control as="select"
              onChange={(e) => setAdmitYear(e.target.value)} value={admitYear}>
              <option selected></option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="select">
            <Form.Label>Admission Status</Form.Label>
            <Form.Control as="select"
              onChange={(e) => setStatus(e.target.value)} value={status}>
              <option selected></option>
              <option>Admitted</option>
              <option>Interviewed</option>
              <option>Rejected</option>
              <option>Waitlisted</option>
            </Form.Control>
          </Form.Group>

          <div className="row">

            <Form.Group className="mb-3 col-6" controlId="select">
              <Form.Label>Academic Qualification</Form.Label>
              <Form.Control as="select"
                onChange={(e) => setQualification(e.target.value)} value={qualification}>
                {HighSchoolQualificationArray.map((qualification) => 
                  <option key={qualification}>{qualification}</option>
                )}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 col-6" controlId="formBasicText">
              <Form.Label>Grade</Form.Label>
              <Form.Control type="number"
                onChange={(e) => setGrade(e.target.value)}

                min={HighSchoolQualification[qualification].min}
                max={HighSchoolQualification[qualification].max}
                value={grade}
                placeholder="e.g. 90" />
            </Form.Group>
          </div>

          <div className="row">

            <Form.Group className="mb-3 col-6" controlId="select">
              <Form.Label>English Test </Form.Label>
              <Form.Control as="select"
                onChange={(e) => setEnglishTest(e.target.value)} value={englishTest}>
                {EnglishArray.map((qualification) => 
                  <option key={qualification}>{qualification}</option>
                )}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 col-6" controlId="formBasicText">
              <Form.Label>Grade</Form.Label>
              <Form.Control type="number"
                disabled={englishTest === 'Inapplicable' || englishTest === '' ? true : false}
                onChange={(e) => setEnglishGrade(e.target.value)}
                value={englishTest === 'Inapplicable' || englishTest === '' ? '' : englishGrade}
                min={EnglishTest[englishTest].min}
                max={EnglishTest[englishTest].max}
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
        </Form>
      </div>

        <Footer/> 
    </>
  )
}

export default SubmitResults;
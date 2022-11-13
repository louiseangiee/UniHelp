import React, { useState, useEffect } from 'react';
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './stylesheets/submit-results.css';
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import { useCollection } from '../hooks/useCollection'
import { projectFirestore } from '../firebase/config'
import { ReactSession } from 'react-client-session';
import { HighSchoolQualificationArray } from '../components/HighSchoolQualification'
import { EnglishArray } from "../components/EnglishTest";


function Settings() {
  const { logout, isPending } = useLogout()
  ReactSession.set("isLoggedout", true)
  const { user } = useAuthContext()
  const [isOpen, setIsOpen] = useState(false);
  const [isPendingData, setIsPendingData] = useState(false)
  const [currentData, setCurrentData] = useState(null)
  const [error, setError] = useState(false)
  const [formFullName, setFormFullName] = useState("");
  const [formStudentType, setFormStudentType] = useState("");
  const [formStudentOrigin, setFormStudentOrigin] = useState("");
  const [formHSQualification, setFormHSQualification] = useState("");
  const [formEnglishTest, setFormEnglishTest] = useState("");
  const [formGradDate, setFormGradDate] = useState("");
  const [formDoB, setFormDoB] = useState("");
  const [formError, setFormError] = useState('')



  useEffect(() => {
    setIsPendingData(true)
    
    const unsub = projectFirestore.collection('accountDetails').doc(user.uid).onSnapshot((doc) => {
      if(doc.exists) {
        setIsPendingData(false)
        var data = doc.data()
        console.log(data)
        setCurrentData(data)
        setFormFullName(data.fullName)
        setFormStudentType(data.studentType)
        setFormStudentOrigin(data.studentOrigin)
        setFormHSQualification(data.HSQualification)
        setFormEnglishTest(data.englishTest)
        console.log(formEnglishTest)
        setFormGradDate(data.gradDate)
        setFormDoB(data.DoB)
        
      } else {
        setIsPendingData(false)
        setError('Could not fetch account details')
      }
    })

    return () => unsub()

  }, [user.uid])
  
  const saveChanges = (e) => {
    e.preventDefault();
    setFormError('')
    let error = []
    var letters = /^[A-Za-z]+$/;
    let fullNameArray = formFullName.split(' ')
    for(let word of fullNameArray){
      if(!word.match(letters)){
        setFormError('Please enter only alphabets in the Full Name field')
        return
      }
    }

    e.preventDefault();
    
    
    console.log(formEnglishTest)
    projectFirestore.collection('accountDetails').doc(user.uid).update({
      fullName: formFullName,
      studentOrigin: formStudentOrigin,
      HSQualification: formHSQualification,
      englishTest: formEnglishTest,
      gradDate: formGradDate,
      DoB: formDoB
    })
  }

  
  

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  
  return (
    <>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {currentData && (
      <>
        <SidebarHome isOpen={isOpen} toggle={toggle} />
        <NavbarMain toggle={toggle} />

        <div id="form" class="px-5 container col-xl-7" style={{height: '100vh', overflow:"scroll"}}>
          <h1 class="header mx-0 px-0">Settings</h1>

          <Form>
            <div className="row">

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" value={formFullName} onChange={(e) => setFormFullName(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="select">
                <Form.Label>I am a</Form.Label>
                <Form.Control as="select" value={formStudentOrigin} onChange={(e) => setFormStudentOrigin(e.target.value)} >
                  <option>Local Student</option>
                  <option>International Student</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="select">
                <Form.Label>High School Qualification</Form.Label>
                <Form.Control as="select" value={formHSQualification} onChange={(e) => setFormHSQualification(e.target.value)}>
                  <option disabled selected>-- select an option --</option>
                  {HighSchoolQualificationArray.map((qualification) => 
                  <option key={qualification}>{qualification}</option>
                  )}
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="select">
                <Form.Label>English Proficiency Test</Form.Label>
                <Form.Control as="select" value={formEnglishTest} onChange={(e) => setFormEnglishTest(e.target.value)}>
                {EnglishArray.map((english) => 
                  <option key={english}>{english}</option>
                )}
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="DateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" value={formDoB} onChange={(e) => setFormDoB(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="DateOfGrad">
                <Form.Label>Expected Graduation Date</Form.Label>
                <Form.Control type="date" value={formGradDate} onChange={(e) => setFormGradDate(e.target.value)}/>
              </Form.Group>
            </div>

            <div className="row">
              <Button className="mb-3" variant="primary" type="submit" onClick={saveChanges}>
                Save Changes
              </Button>
            </div>

            <div className="row">
              {!isPending && <Button className="mb-3" variant="warning" onClick={logout}>Logout</Button>}
              {isPending && <Button className="mb-3" variant="warning" disabled>Logging out...</Button>}
            </div>

            <p style={{color: "red"}}>{formError}</p>

          </Form>
        </div>
      </>
      )}


      <Footer />
    </>
  )
}

export default Settings;
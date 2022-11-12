import React, { useState, useEffect } from "react";
import { useSignup } from '../../hooks/useSignup'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { ReactSession } from 'react-client-session';

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Select,
} from "./SignupElements";

const SignUp = () => {
  const { addDocument, response } = useFirestore('accountDetails')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [studentType, setStudentType] = useState("");
  const [studentOrigin, setStudentOrigin] = useState("")
  const [HSQualification, setHSQualification] = useState("");
  const [englishTest, setEnglishTest] = useState("")
  const [gradDate, setGradDate] = useState("");
  const [DoB, setDoB] = useState("");
  const [errorMessage, setErrorMessage] = useState('')
  const { signup, isPending, error } = useSignup()
  const { user } = useAuthContext()
  ReactSession.setStoreType("localStorage");


  const handleSubmit = (e) => {
    e.preventDefault();
    let error = []
    setErrorMessage('')
    ReactSession.set("isSignedup", true)

    if (email === '') {
      error = [...error, 'email']
    }
    if (password === '') {
      error = [...error, 'password']
    }
    if (fullName === '') {
      error = [...error, 'fullName']
    }
    if (studentType === '') {
      error = [...error, 'studentType']
    }
    if (studentOrigin === '') {
      error = [...error, 'studentOrigin']
    }
    if (HSQualification === '') {
      error = [...error, 'HSQualification']
    }
    if (gradDate === '') {
      error = [...error, 'gradDate']
      console.log(englishTest)
    }
    if (DoB === '') {
      error = [...error, 'DoB']
      console.log(englishTest)
    }

    console.log(error)

    if (error.length > 0) {
      setErrorMessage('Please fill in ' + error.join(', '))
      return
    }

    console.log(`
      Full name: ${fullName}
      Email: ${email}
      Password: ${password}
      Student Type: ${studentType}
      High School Qualification: ${HSQualification}
      Graduation Date: ${gradDate}
      Date of Birth: ${DoB}
    `);

    signup(email, password, fullName, studentType, studentOrigin, HSQualification, englishTest, gradDate, DoB);

  };

  useEffect(() => {
    if (response.success) {
      setEmail(''); setPassword(''); setFullName(''); setStudentOrigin(''); setEnglishTest(''); setGradDate(''); setHSQualification('')
      setStudentType('')
    }
  }, [response.success])


  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"><img src={"logos/Unihelp_white.png"} height="80"></img></Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign up for your account</FormH1>

              <FormLabel htmlFor="fullname">Full Name</FormLabel>
              <FormInput
                type="text"
                id="fullname"
                required
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />

              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                required
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                type="password"
                required
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <FormLabel htmlFor="student-origin">I am a:</FormLabel>
              <Select
                required
                id="student-origin"
                onChange={(e) => setStudentOrigin(e.target.value)}
                value={studentOrigin}
              >
                <option selected></option>
                <option>Local Student</option>
                <option>International Student</option>
              </Select>

              <FormLabel htmlFor="student-type">I am a:</FormLabel>
              <Select
                required
                id="student-type"
                onChange={(e) => setStudentType(e.target.value)}
                value={studentType}
              >
                <option selected></option>
                <option>Prospective Student</option>
                <option>Current Student</option>
              </Select>

              <FormLabel htmlFor="HSQ">High School Qualification</FormLabel>
              <Select
                required
                id="HSQ"
                onChange={(e) => setHSQualification(e.target.value)}
                value={HSQualification}
              >
                <option selected></option>
                <option>International Baccalaurate</option>
                <option>Cambridge A Level</option>
                <option>Polytechnic Diploma</option>
                <option>SAT</option>
                <option>ACT</option>
                <option>Other</option>
              </Select>

              <FormLabel htmlFor="english-test">English Proficiency Test</FormLabel>
              <Select
                required
                id="english-test"
                onChange={(e) => setEnglishTest(e.target.value)}
                value={englishTest}
              >
                <option selected></option>
                <option>IELTS</option>
                <option>TOEFL</option>
                <option>TOEIC</option>
              </Select>

              <FormLabel htmlFor="graddate">Date of Graduation</FormLabel>
              <FormInput
                type="date"
                required
                id="graddate"
                onChange={(e) => setGradDate(e.target.value)}
                value={gradDate}
              />

              <FormLabel htmlFor="dob">Date of Birth</FormLabel>
              <FormInput
                type="date"
                required
                id="dob"
                onChange={(e) => setDoB(e.target.value)}
                value={DoB}
              />

              {!isPending && <FormButton type='submit'>Continue</FormButton>}
              {isPending && <FormButton type='submit'>Loading...</FormButton>}
              {error && <p>{error}</p>}
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;

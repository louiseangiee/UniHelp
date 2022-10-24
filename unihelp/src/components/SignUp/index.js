import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [studentType, setStudentType] = useState("");
  const [HSQualification, setHSQualification] = useState("");
  const [gradDate, setGradDate] = useState("");
  const [DoB, setDoB] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`
      Full name: ${fullName}
      Email: ${email}
      Password: ${password}
      Student Type: ${studentType}
      High School Qualification: ${HSQualification}
      Graduation Date: ${gradDate}
      Date of Birth: ${DoB}
    `);
  };

  return (
    <>
      <Container>
        <FormWrap>
          {/* <Icon to="/"><img src={"logos/Unihelp_white.png"} height="80"></img></Icon> */}
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

              <FormLabel htmlFor="student-type">I am a:</FormLabel>
              <Select
                required
                id="student-type"
                onChange={(e) => setStudentType(e.target.value)}
                value={studentType}
              >
                <option selected>
                  --Select an Option--
                </option>
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
                <option selected value={null}>
                  --Select an Option--
                </option>
                <option>Cambridge A Level</option>
                <option>International Baccalaurate</option>
                <option>Polytechnic Diploma</option>
                <option>Other</option>
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

              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;

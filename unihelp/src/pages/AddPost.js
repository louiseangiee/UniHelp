import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
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
} from "../components/SignUp/SignupElements";



const AddPost = () =>{
  
  const [school, setSchool] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`
      School: ${school}
      Content: ${content}
      Title: ${title}
    `);
  };
  return (
    <>
    <NavbarMain/>
      <Container className=" my-3 p-5">
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1 className="my-4"> Submit a Forum Post </FormH1>
              <FormLabel className="p-2" htmlFor="school"> School </FormLabel>
              <Select className="mt-0"
              required
              id = "school"
              onChange={(e) => setSchool(e.target.value)}
              value = {school}>

                <option selected value={null}>
                  --Select an Option--
                </option>
                <option>NUS</option>
                <option>NTU</option>
                <option>SMU</option>
                
              </Select>

              <FormLabel htmlFor="title"> Forum Title </FormLabel>
              <FormInput type = "text" required id ="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              />

              <FormLabel htmlFor="content"> Forum Content </FormLabel>
              <FormInput className = "h-100" type = "textarea" required id ="title"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              />

              <FormButton className="my-5" type = "submit"> Post </FormButton>

              
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer/>
    </>
  )
  
}

export default AddPost;
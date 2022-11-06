import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form'
import { FormInput } from "../components/SignIn/SigninElements";
import { FormGroup, FormLabel } from "@material-ui/core";

function AddPost() {
    const [isOpen, setIsOpen]  = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    }
    return (
     <>
        <SidebarHome isOpen={isOpen} toggle={toggle} />
        <NavbarMain toggle={toggle} />
        
        <Form>
          <FormGroup className="mb-3">
            <FormLabel> </FormLabel>
          </FormGroup>
        </Form>

        <Footer />
     </> 
  )
}

export default AddPost;
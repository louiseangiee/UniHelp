import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';

function AddPost() {
    const [isOpen, setIsOpen]  = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    }
    return (
     <>
        <SidebarHome isOpen={isOpen} toggle={toggle} />
        <NavbarMain toggle={toggle} />
        

        <Footer />
     </> 
  )
}

export default AddPost;
import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import tempfiletest from "../database/tempfiletest.json";

function Forum() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
   <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    <SearchBar placeholder="Search" data={tempfiletest} />

    <Footer />
   </> 
  )
}

export default Forum;
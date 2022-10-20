import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import tempfiletest from "../database/tempfiletest.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Forum() {
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
   <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
        
    <div id = "searchBar">
      <SearchBar placeholder="Search" data={tempfiletest} />
      
    </div>

    <div id= "schoolSelection">
      <h1 class ="header">Schools You Follow</h1>
      <div id = "card" class ="row">
        <div class = "col-4">
            <Card style= {{ width : '18rem', justifyContent: 'center'}}>
              <Card.Body>
                <Card.Title class = "CardSchoolTitle" style={{}}> NUS </Card.Title>
              </Card.Body>
            </Card>
        </div>
        <div class = "col-4">
            <Card style= {{ width : '18rem'}}>
              <Card.Body>
                <Card.Title class = "CardSchoolTitle"> NTU </Card.Title>
              </Card.Body>
            </Card>
        </div>
        <div class = "col-4">
            <Card style= {{ width : '18rem'}}>
              <Card.Body>
                <Card.Title class = "CardSchoolTitle"> SMU </Card.Title>
              </Card.Body>
            </Card>
        </div>

      </div>
      
    </div>


    <Footer />
   </> 
  )
}

export default Forum;
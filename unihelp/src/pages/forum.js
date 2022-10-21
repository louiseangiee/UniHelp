import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import tempfiletest from "../database/tempfiletest.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './stylesheets/forum.css';



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
      <div id = "cardRow" class ="row">
        <div class = "col-4">
          
            <Card>
              <Card.Body>
                <Card.Img variant='top' className="img-fluid " class = "logos" src = "logos/nus_logo.jpg"/>
                <Card.Title id = "NUS title" class = "CardSchoolTitle" style={{textAlign: 'center'}}> NUS </Card.Title>
              </Card.Body>
            </Card>
        </div>
        <div class = "col-4">
            <Card>
              <Card.Body>
              <Card.Img variant='top' className="img-fluid " class = "logos" src = "logos/ntu_logo.jpg"/>
                <Card.Title id = "NTU title" class = "CardSchoolTitle" style={{textAlign: 'center'}}> NTU </Card.Title>
              </Card.Body>
            </Card>
        </div>
        <div class = "col-4">
            <Card>
              <Card.Body>
              <Card.Img variant='top' className="img-fluid " class = "logos" src = "logos/smu_logo.jpg"/>
                <Card.Title id = "SMU title" class = "CardSchoolTitle" style={{textAlign: 'center'}}> SMU </Card.Title>
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
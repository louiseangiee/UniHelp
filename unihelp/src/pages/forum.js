import React, { useState } from 'react';
import NavbarMain from '../components/NavbarMain';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";


//These two files need to be changed
import tempfiletest from "../database/SearchbartestFile.json";
//how to import js file



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './stylesheets/forum.css';
import Overlay from 'react-bootstrap/Overlay';
import FilterForums from '../components/SchoolFilterCards';



function Forum() {
  const [isOpen, setIsOpen]  = useState(false);

  const [isActive, setIsActive] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);

  }
  const handleClick = () => {
    
    setIsActive(current => !current);

    
  };

  return (
   <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    
    {/* Make Searchbar stick to navbar */}
    <div id = "searchBar">
      <SearchBar placeholder="Search" data={tempfiletest} />
      
    </div>

    <div id= "schoolSelection">
      <h1 class ="header">Schools You Follow</h1>
      <div id = "cardRow" class ="row">
        <div class = "col-4">
            

            {/* Onclick filter forum type by school, working with Davina for code, onclick background gray and filter, unclick back to normal*/}
            <Card>
              <Card.Body>
                <Card.Img variant='top' className="img-fluid " class = "logos" src = "logos/nus_logo.jpg"/>
                <Card.Title id = "NUS title" class = "CardSchoolTitle" style={{textAlign: 'center'}}> NUS </Card.Title>
                <a onClick={handleClick} name = "NUS" className='stretched-link' href='#'></a>
              </Card.Body>
            </Card>
        </div>
        <div class = "col-4">
            <Card>
              <Card.Body>
              <Card.Img variant='top' className="img-fluid " class = "logos" src = "logos/ntu_logo.jpg"/>
                <Card.Title id = "NTU title" class = "CardSchoolTitle" style={{textAlign: 'center'}}> NTU </Card.Title>
                <a onClick={handleClick} name = "NTU" className='stretched-link' href='#'></a>
              </Card.Body>
            </Card>
        </div>
        <div class = "col-4">
            <Card>
              <Card.Body>
              <Card.Img variant='top' className="img-fluid " class = "logos" src = "logos/smu_logo.jpg"/>
                <Card.Title id = "SMU title" class = "CardSchoolTitle" style={{textAlign: 'center'}}> SMU </Card.Title>
                <a onClick={handleClick} name = "SMU" className='stretched-link' href='#'> </a>
              </Card.Body>
            </Card>
        </div>

      </div>
      
    </div>

    <div id="forumBoxes">
        <FilterForums></FilterForums>
    </div>


    <Footer />
   </> 
  )
}

export default Forum;
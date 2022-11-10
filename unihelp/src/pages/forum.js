import React, { useState, useEffect } from 'react';
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";

import { projectFirestore } from '../firebase/config'


//These two files need to be changed
import tempfiletest from "../database/SearchbartestFile.json";
//how to import js file

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './stylesheets/forum.css';
import Overlay from 'react-bootstrap/Overlay';
import ForumCardList from '../components/ForumCardList';
import FilterForums from '../components/SchoolFilterCards';
import AddPostButton from '../components/AddPostButton';

function Forum() {
  console.log("masuk")
  const [isOpen, setIsOpen]  = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);

  }
  const handleClick = () => {
    setIsActive(current => !current);
  };

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const unsub = projectFirestore.collection('forumPost').orderBy('createdAt').onSnapshot((snapshot) => {
      if(snapshot.empty){
        setError('No posts to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })
    return () => unsub()
  }, [])

  return (
    
   <>
    <SidebarHome isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    
    {/* Make Searchbar stick to navbar */}
    <div id = "searchBar">
      <SearchBar placeholder="Search" data={tempfiletest} />
      
    </div>

    <div id= "schoolSelection">
      <h1 class ="header">Schools You Follow</h1>
      <div id = "cardRow" class ="row">
        <div class = "col-xl-4 col-lg-4 col-md-4">
            

            
            <Card>
              <Card.Body>
                <Card.Img variant='top' className="img-fluid " class = "logos" src = "logos/nus_logo.jpg"/>
                <Card.Title id = "NUS title" class = "CardSchoolTitle" style={{textAlign: 'center'}}> NUS </Card.Title>
                <a onClick={handleClick} name = "NUS" className='stretched-link' href='/NUS'></a>
              </Card.Body>
            </Card>
        </div>
        <div class = "col-xl-4 col-lg-4 col-md-4">
            <Card>
              <Card.Body>
              <Card.Img variant='top' className="img-fluid " class = "logos" src = "logos/ntu_logo.jpg"/>
                <Card.Title id = "NTU title" class = "CardSchoolTitle" style={{textAlign: 'center'}}> NTU </Card.Title>
                <a onClick={handleClick} name = "NTU" className='stretched-link' href='/NTU'></a>
              </Card.Body>
            </Card>
        </div>
        <div class = "col-xl-4 col-lg-4 col-md-4">
            <Card>
              <Card.Body>
              <Card.Img variant='top' className="img-fluid " class = "logos" src = "logos/smu_logo.jpg"/>
                <Card.Title id = "SMU title" class = "CardSchoolTitle" style={{textAlign: 'center'}}> SMU </Card.Title>
                <a onClick={handleClick} name = "SMU" className='stretched-link' href='/SMU'> </a>
              </Card.Body>
            </Card>
        </div>

      </div>
      
    </div>

    {error && <p className='error'>{error}</p>}
    {isPending && <p className='loading'>Loading...</p>}

    <div id="forumBoxes">
      {data && <ForumCardList posts={data}/>}
    </div>
        
      {/* Filter By : <FilterForums></FilterForums> */}

    <AddPostButton></AddPostButton>
    

    <Footer/> 
   </> 
  )
}

export default Forum;
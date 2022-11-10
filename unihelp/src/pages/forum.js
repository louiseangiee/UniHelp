import React, { useState, useEffect } from 'react';
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'

//components
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './stylesheets/forum.css';
import Overlay from 'react-bootstrap/Overlay';
import ForumCardList from '../components/ForumCardList';
import FilterForums from '../components/SchoolFilterCards/index';
import AddPostButton from '../components/AddPostButton';

function Forum() {
  const [isOpen, setIsOpen]  = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const handleClick = () => {
    setIsActive(current => !current);
  };

  const { user } = useAuthContext()
  const { documents, error } = useCollection('forumPost')
  const [filter, setFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }
  
  const posts = documents ? documents.filter(document => {
    switch(filter) {
      case 'all':
        return true
      case 'NUS':
      case 'NTU':
      case 'SMU':
        console.log(document.school, filter)
        return document.school === filter
      default:
        return true
    }
  }) : null

  return (
    
   <>
    <SidebarHome isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle} />
    
    {/* Make Searchbar stick to navbar */}
    {error && <p className='error'>{error}</p>}

    {/* <div id = "searchBar">
      <SearchBar placeholder="Search" data={tempfiletest} />
    </div> */}

    <div id= "schoolSelection">
      <h1 class ="header">Schools Filter</h1>
      {documents && <FilterForums changeFilter={changeFilter} />}
    </div>

    <div id="forumBoxes">
      {posts && <ForumCardList posts={posts} />}
    </div>
        
      {/* Filter By : <FilterForums></FilterForums> */}

    <AddPostButton></AddPostButton>
    

    <Footer/> 
   </> 
  )
}

export default Forum;
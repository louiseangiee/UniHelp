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
import toast, { Toaster } from 'react-hot-toast';
import { ReactSession } from 'react-client-session';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
ReactSession.setStoreType("localStorage");

function Forum() {

  useEffect(() => {
    while (ReactSession.get("addedPost")) {
      toast.success('You have added a Post')
      ReactSession.set("addedPost", false)
    }
  }, console.log('error'));


  function setNew() {
    setNewToOld(true)
    setOldToNew(false)
    setVotes(false)
    setonLoad(false)
  }


  function setOld() {
    setNewToOld(false)
    setOldToNew(true)
    setVotes(false)  
    setonLoad(false)

  }

  function setVote() {
    setNewToOld(false)
    setOldToNew(false)
    setVotes(true)  
    setonLoad(false)

  }



  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [newToOld, setNewToOld] = useState(false);
  const [oldToNew, setOldToNew] = useState(false);
  const [highvotes, setVotes] = useState(false);
  const [onLoad, setonLoad] = useState(true);



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
    switch (filter) {
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
      <Toaster
        position="top-right"
        toastOptions={{
          // Default options for specific types
          success: {
            duration: 2000,
          },
          style: {
            border: '2px solid #5271ff',
            padding: '16px',
          },
        }}
      />
      <SidebarHome isOpen={isOpen} toggle={toggle} />
      <NavbarMain toggle={toggle} />

      {/* Make Searchbar stick to navbar */}
      {error && <p className='error'>{error}</p>}

      <div id = "searchBar">
      <SearchBar placeholder="Search" data={posts} />
      </div>

      <div id="schoolSelection">
        <h1 class="header">Filter by:</h1>
        {documents && <FilterForums changeFilter={changeFilter} />}
      </div>

      <ButtonGroup aria-label="Basic example">
        <Button onClick={setNew}>Newest</Button>
        <Button onClick={setOld}>Oldest</Button>
        <Button onClick={setVote}>Vote</Button>
      </ButtonGroup>

      <div id="forumBoxes">
        {posts && onLoad && <ForumCardList posts={posts.sort((a, b) => b.votes - a.votes)}/>}
        {posts && newToOld && <ForumCardList posts={posts.sort((a, b) => b.createdAt - a.createdAt)}  />}
        {posts && oldToNew && <ForumCardList posts={posts.sort((a, b) => a.createdAt - b.createdAt)}  />}
        {posts && highvotes && <ForumCardList posts={posts.sort((a, b) => b.votes - a.votes)} />}
      </div>

      {/* Filter By : <FilterForums></FilterForums> */}

      <AddPostButton></AddPostButton>


      <Footer />
    </>
  )
}

export default Forum;


import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form'
import Sidebar from '../components/Sidebar';
import FormText from "react-bootstrap/esm/FormText";
import { useFirestore } from '../hooks/useFirestore'
import { useAuthContext } from '../hooks/useAuthContext'




const AddPost = () => {

  const { addDocument, response } = useFirestore('forumPost')

  
  const [school, setSchool] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [votes, setVotes] = useState("");
  

  const { user } = useAuthContext()

  const [isOpen, setIsOpen]  = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`
      School: ${school}
      Content: ${content}
      Title: ${title}
    `);

    addDocument({
      school, 
      content,
      title,
      votes
    })
  };

  useEffect(() => {
    if (response.success) {
      setSchool(''); setContent(''); setTitle(''); setVotes('')
      window.location.replace("/forum");

    }
  }, [response.success])

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavbarMain toggle={toggle}/>
    
    <div id = "form" class="px-5 container col-xl-7">
      <h1 className="my-5" style= {{fontWeight: "bold", textAlign: "center"}}> Create new Forum Post</h1>
      <Form onSubmit={handleSubmit}>
        

        <Form.Group className = "mx-3 my-5">
          <Form.Label> School </Form.Label>
          <Form.Control as="select" 
            onChange={(e)=> setSchool(e.target.value)} value={school}>
            <option selected>-- select an option --</option>
            <option>NUS</option>
            <option>NTU</option>
            <option>SMU</option>
          </Form.Control>

          <Form.Label className="mt-3 font-weight-bold"> Forum Post Title </Form.Label>

          <Form.Control type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value = {title} 
            placeholder="e.g. I need help with Mods!" />

          <Form.Label className="mt-3 font-weight-bold"> Forum Content </Form.Label>

          <Form.Control as="textarea" row = {10}
            onChange={(e) => setContent(e.target.value)}
            value = {content} 
            placeholder="e.g. What prof to bid for IS110?" />
        
          <Button className=" my-3 font-weight-bold" variant="primary" type="submit">
            Post
          </Button>
        </Form.Group>


      </Form>

    </div>

      
    <Footer/>
    </>
  )
  
}

export default AddPost;
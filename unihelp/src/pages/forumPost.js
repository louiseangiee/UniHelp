import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useDocument } from '../hooks/useDocument';


//components
import PostComments from "../components/PostComments/PostComments";
import PostContent from "../components/PostContent/PostContent";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import SidebarHome from "../components/SidebarHome";

//styles

export default function ForumPost() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { id } = useParams()
  const { document, error } = useDocument('forumPost', id)

  if(error) {
    return <div>{error}</div>
  }
  if(!document) {
    return <div>Loading...</div>
  }
  return (
    <>
      <SidebarHome isOpen={isOpen} toggle={toggle} />
      <NavbarMain toggle={toggle} />
      
        <div className="d-flex row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <PostContent post={document}/>
          </div>
          <div className="col-xl-7 col-lg-6">
            <PostComments post={document}/> 
          </div>
          
           
        </div>
      
      
      
      
      <Footer />
    </>
  )
}
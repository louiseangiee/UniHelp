import { useParams } from "react-router-dom"
import { useDocument } from '../hooks/useDocument'
import React, { useState } from 'react'

//components
import ForumComments from "../components/PostComments/PostComments"
import ForumGeneral from "../components/PostContent/PostContent"
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import SidebarHome from "../components/SidebarHome";
import PostAComment from "../components/PostComments/PostAComment"

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
      
        <div className="d-flex row">
          <div className="col-xl-5 col-lg-6">
            <ForumGeneral post={document}/>
            
          </div>
          <div className="col-xl-7 col-lg-6">
            <ForumComments post={document}/> 
          </div>
          
           
        </div>
      
      
      
      
      <Footer />
    </>
  )
}
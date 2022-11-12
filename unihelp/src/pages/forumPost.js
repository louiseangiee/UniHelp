import { useParams } from "react-router-dom"
import { useDocument } from '../hooks/useDocument'
import React, { useState } from 'react'

//components
import ForumComments from "../components/PostComments/PostComments"
import ForumGeneral from "../components/PostContent/PostContent"
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
      <ForumGeneral post={document}></ForumGeneral>
      <ForumComments post={document}></ForumComments>
      <Footer />
    </>
  )
}
import { useParams } from "react-router-dom"
import { useDocument } from '../hooks/useDocument'
import React from 'react'

//components
import ForumComments from "../components/PostComments/PostComments"
import ForumGeneral from "../components/PostContent/PostContent"

//styles

export default function ForumPost() {
  const { id } = useParams()
  const { document, error } = useDocument('forumPost', id)

  if(error) {
    return <div>{error}</div>
  }
  if(!document) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <ForumGeneral post={document}></ForumGeneral>
      <ForumComments post={document}></ForumComments>
    </div>
  )
}
import { useAuthContext } from "../../hooks/useAuthContext"
import React from 'react'

import Card from "react-bootstrap/Card"



export default function PostContent({ post }) {
  const { user } = useAuthContext()

  return (
    <>
    <div style={{margin: '3%'}}>
      
      <Card className="p-4 w-100">
      <div className="post-content">
        
        <h2 style = {{fontWeight: 'bold'}}>{post.title}</h2>
          
        
        
        <h3> {post.school} </h3>
        <h5>By: {post.poster}</h5>
        
        <br></br>
        <p>{post.content}</p> 
      </div>
      </Card>
    </div>
    </>
  )
}
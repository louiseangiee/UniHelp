import { useAuthContext } from "../../hooks/useAuthContext"
import React from 'react'

import Card from "react-bootstrap/Card"



export default function PostContent({ post }) {
  const { user } = useAuthContext()

  return (
    <Card>
      <div className="post-content">
        <h2>{post.title}</h2>
        <h3>{post.school}</h3>
        <h3>{post.poster}</h3>
        <p>{post.content}</p>
      </div>
    </Card>
  )
}
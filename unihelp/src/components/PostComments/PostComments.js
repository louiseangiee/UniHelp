import React from 'react'
import { useState } from 'react'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function PostComments({ post }) {
  const { user } = useAuthContext()
  const { updateDocument, response } = useFirestore('forumPost')
  const [newComment, setNewComment] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      email: user.email,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: user.email+Math.random()
    }

    await updateDocument(post.id, {
      comments: [...post.comments, commentToAdd],
    })
    if(!response.error){
      setNewComment('')
    }
  }

  //STYLES
  const PostCommentStyle = {
    margin: '3%',

  }

  return (
    <div className='post-comments' style = {PostCommentStyle}>
      
      <h4>Post Comments</h4>
      <br></br>
      <Card name = "commentsList" className='p-4'>
      <ul style={{listStyle: "none"}}>
        {post.comments.length > 0 && post.comments.map(comment => (
          <li key={comment.id}>
          <div name = "userDates" className='row'>
            <div className='col-3'>
              <div className="comment-poster">
                <p style={{fontWeight:"bold"}}>{comment.email}</p>
              </div>
            </div>
            <div className='col-6'>
              <div className='comment-date'>
                <p>{formatDistanceToNow(comment.createdAt.toDate(), {addSuffix: true})}</p>
              </div>
            </div>

          </div>
            
           
            
            <div className='comment-content'>
              <p>{comment.content}</p>
            </div>
          </li>
          
          
        ))}
      </ul>
      </Card>

      <Form>
        <div className="row mt-4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Add new comment:</Form.Label>
            <Form.Control as="textarea" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
          </Form.Group>
        </div>

        <div className="row">
          <div className='col-4'></div>
          <Button className="mb-3 col-4" variant="primary" onClick={handleSubmit}>Add Comment</Button>
        </div>
      </Form>
    </div>
  )
}

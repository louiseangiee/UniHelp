import React from 'react'
import { useState } from 'react'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

export default function PostAComment({ post }) {
  const { user } = useAuthContext()
  const { updateDocument, response } = useFirestore('forumPost')
  const [newComment, setNewComment] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')

    if(newComment.trim() === ''){
      setError('Comment cannot be empty!')
      setNewComment('')
    } else {
      
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
    }

    

  

  return (
    <>
    

      <Form>
        <div className="row mt-4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Add new comment:</Form.Label>
            <Form.Control as="textarea" value={newComment} onChange={(e) => setNewComment(e.target.value)} style={{borderRadius: '10px'}} required/>
          </Form.Group>
        </div>

        <div className="row">
          <div className='col-4'></div>
          <Button className="mb-3 col-4" variant="primary" onClick={handleSubmit}>Add Comment</Button>
        </div>
      </Form>

      <p>{error}</p>
    
    </>
  )
}

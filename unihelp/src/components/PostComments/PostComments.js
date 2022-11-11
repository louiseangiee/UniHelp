import React from 'react'
import { useState } from 'react'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'

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

  return (
    <div className='post-comments'>
      <h4>Post Comments</h4>
      <ul>
        {post.comments.length > 0 && post.comments.map(comment => (
          <li key={comment.id}>
            <div className="comment-poster">
              <p>{comment.email}</p>
            </div>
            <div className='comment-date'>
              <p>{formatDistanceToNow(comment.createdAt.toDate(), {addSuffix: true})}</p>
            </div>
            <div className='comment-content'>
              <p>{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>

      <Form>
        <div className="row">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Add new comment:</Form.Label>
            <Form.Control as="textarea" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
          </Form.Group>
        </div>

        <div className="row">
          <Button className="mb-3" variant="primary" onClick={handleSubmit}>Add Comment</Button>
        </div>
      </Form>
    </div>
  )
}

import { projectFirestore } from '../firebase/config'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'


   

//styles

function ForumPost() {
  const { id } = useParams()
  const { user } = useAuthContext()

  const [post, setPost] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    
    const unsub = projectFirestore.collection('forumPost').doc(id).onSnapshot((doc) => {
      if(doc.exists) {
        setIsPending(false)
        setPost(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find that recipe')
      }
    })

    return () => unsub()

  }, [id])

  const upvote = () => {
    console.log("for upvote")
  }
  
  return (
    <div>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {<p>Assume there is post here</p>}
    </div>
  )
}

export default ForumPost;

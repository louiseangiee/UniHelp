import React from 'react'
import { Link } from 'react-router-dom'
import './forumElements.css'

//bootstrap components
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { projectFirestore } from '../../firebase/config'
import { useAuthContext } from "../../hooks/useAuthContext"

export default function ForumCardList({ posts }) {
  const { user } = useAuthContext()
  const email = user.email
  if (posts.length === 0) {
    return <div className='error'>No posts to load...</div>
  }

 /* for (let post in posts) {
    var unsub = projectFirestore.collection('forumPost').doc(posts[post].id).get().then(doc => {
      var data = doc.data()
      var upVoters = data.upVoters
      if (upVoters.includes(email)) {
        console.log(upVoters)
        document.getElementById('upvote').className = 'test'
        console.log(document.getElementById('upvote'))
      }
    })
  }
  */


  const upVote = (id) => {
    const unsub = projectFirestore.collection('forumPost').doc(id).get().then(doc => {
      var data = doc.data()
      var upVoters = data.upVoters
      if (!upVoters.includes(email)) {
        upVoters.push(email)
        projectFirestore.collection('forumPost').doc(id).update({
          votes: data.votes + 1,
          upVoters: upVoters
        })
      } else {
        upVoters.splice(email)
        projectFirestore.collection('forumPost').doc(id).update({
          votes: data.votes - 1,
          upVoters: upVoters
        })
      }
    })
  }

  /*const downVote = (id) => {
    const unsub = projectFirestore.collection('forumPost').doc(id).get().then(doc => {
      var data = doc.data()
      var downVoters = data.upVoters
      if (data.votes > 0) {
        if (!downVoters.includes(email)) {
          downVoters.push(email)
          projectFirestore.collection('forumPost').doc(id).update({
            votes: data.votes - 1,
            upVoters: upVoters
          })
        } else {
          downVoters.splice(email)
          projectFirestore.collection('forumPost').doc(id).update({
            votes: data.votes + 1,
            upVoters: upVoters
          })
        }
      }
    })
  }
              <button id="downvote" className="btn" style={voteButtons}>
                <Card.Img variant='bottom' className="img-fluid" src="logos/downvote.png" style={{ height: '100%' }} onClick={() => { downVote(post.id); }} />
              </button>
  */

  const voteButtons = {
    backgroundColor: 'transparent',
    color: 'transparent',
  }

  const cardsStyle = {
    marginBottom: '20px',
    padding: '20px',
    height: '100%',
    borderRadius: '0px',
    width: '100%'
  }




  return (
    <div className="forum-list">
      {posts.map((post) => (
        <div key={post.id} className="d-flex flex-row" id="upvoteButtons" style={{ marginBottom: '20px', marginTop: '20px', border: 'solid darkgrey 2px' }}>
          <div className="d-flex col-1" style={{ paddingTop: 'auto', paddingBottom: 'auto' }} >
            <Card style={cardsStyle}>
              <button id="upvote" className="btn shadow-none" style={voteButtons}>
                <Card.Img variant='top' className="img-fluid" src="logos/upvote.png" style={{ height: '100%' }} onClick={() => { upVote(post.id); }} />
              </button>

              <Card.Title className="text-center" style={{ marginTop: '20px', marginBottom: '20px' }}> {post.votes} </Card.Title>

            </Card>
          </div>


          <div id={post.id} className="d-flex col-11">
            <Card id={post.id} style={cardsStyle}>
              <Card.Header>
                {post.school}
                <br />
                <span className='username'>By: {post.poster}</span>
              </Card.Header>

              <Card.Body>

                <Card.Title> {post.title} </Card.Title>
                {post.content}

              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}

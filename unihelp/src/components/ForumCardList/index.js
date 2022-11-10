import React from 'react'
import { Link } from 'react-router-dom'
import './forumElements.css'

//bootstrap components
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function ForumCardList({ posts }) {
  console.log(posts)
  if(posts.length === 0) {
    return <div className='error'>No posts to load...</div>
  }


  const voteButtons ={
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
      <div key={post.id} className="d-flex flex-row" id= "upvoteButtons" style={{marginBottom:'20px', marginTop:'20px', border:'solid darkgrey 2px'}}>
              <div className = "d-flex col-1" style={{paddingTop: 'auto', paddingBottom: 'auto'}} >
                  <Card style={cardsStyle}>
                      <button id ="upvote" className = "btn shadow-none" style={voteButtons}>
                        <Card.Img variant='top' className="img-fluid" src = "logos/upvote.png" style={{height: '100%'}}/>
                      </button>
                      
                      <Card.Title className="text-center" style={{marginTop:'20px', marginBottom: '20px'}}> {post.votes} </Card.Title>

                      <button id= "downvote" className = "btn" style={voteButtons}>
                        <Card.Img  variant='bottom' className="img-fluid" src = "logos/downvote.png" style={{ height: '100%'}}/>
                      </button>
                      
                  </Card>
              </div>


              <div id = {post.id} className="d-flex col-11">
                <Card id = {post.id} style={cardsStyle}>
                  <Card.Header> 
                    {post.school}
                    <br/>
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

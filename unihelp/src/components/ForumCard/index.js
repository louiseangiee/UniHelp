import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'


export default function ForumCard() {
  return (
    <div>
        <div className="d-flex flex-row" id= "upvoteButtons" style={{marginBottom:'20px', marginTop:'20px', border:'solid darkgrey 2px'}}>
            <div className = "d-flex col-1" style={{paddingTop: 'auto', paddingBottom: 'auto'}} >
                <Card key = {type.id} style={cardsStyle}>
                    <button id ="upvote" className = "btn shadow-none" style={voteButtons} onClick= {buttonUpdate}>
                      <Card.Img variant='top' className="img-fluid" src = "svgFiles/upvote.png" style={{height: '100%', transform: 'rotate(180deg)'}}/>
                    </button>
                    
                    <Card.Title className="text-center" style={{marginTop:'20px', marginBottom: '20px'}}> {type.upvotes} </Card.Title>

                    <button id= "downvote" className = "btn" style={voteButtons} onClick= {buttonUpdate}>
                      <Card.Img  variant='bottom' className="img-fluid" src = "svgFiles/downvote.png" style={{ height: '100%'}}/>
                    </button>
                    
                </Card>
            </div>


            <div id = {type.id} className="d-flex col-11">
              <Card key = {type.id} id = {type.id} style={cardsStyle}>
                <Card.Header> {type.school} </Card.Header>
                <Card.Body>
                  
                  <Card.Title> {type.forumTitle} </Card.Title>
                  {type.content}
                  
                </Card.Body>
              <Card.Footer>
                
                <div id = "commentsSection">
                  <ul>
                    {listComments(type.comments)}
                  </ul>
                  
                </div>

                <div id = "insertComments" >
                    <Form>
                      <Form.Group>
                        <Form.Control id = {type.id} as = "textarea" row = {5}
                         onChange={(e) => setComment(e.target.value)}
                         value = {comment} 
                         placeholder="Add your comment here"/>
                         <Button className=" my-3 font-weight-bold" variant="primary" type="submit">
                            Comment
                        </Button>
                      </Form.Group>
                    </Form>
                </div>
                
                
              </Card.Footer>

              
              </Card>
          </div>
          </div>
        
    </div>
  )
}

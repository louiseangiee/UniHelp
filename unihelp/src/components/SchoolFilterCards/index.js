import React, { useState, useEffect } from "react";
// import "./styles.css";
import "./forumElements.css"
import { buttons } from "./schools";
import { getForums, filterSchool, readComments } from "./filterSchools";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'



//help debug plis 
function FilterForums() {
  const [filteredForums, setFilteredForums] = useState(null);

  useEffect(() => {
    setFilteredForums(getForums());
  }, []);

  function handleForums(e) {
    let schooltype = e.target.value;
    schooltype !== "all"
      ? setFilteredForums(filterSchool(schooltype))
      : setFilteredForums(getForums());
    
  }

  const [comment, setComment] = useState("")

  

  function listComments(comments){
    //to list comments one by one into comments section
    const CommentsList = comments.map((comment =>
        <li> {comment} </li>
    ))

    return CommentsList
  }

  function buttonUpdate(){
    // if button id = upvote update database else decrease number one user can only do it once button change to red or green (disabled)
  }

  // STYLES
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
    <>
    {/* help me  */}
    

      {buttons &&
        buttons.map((type, index) => (
         
          <>
          <Button style = {{margin: '10px', fontWeight: 'bold', height: '30px', width: '8%', padding: '10px', borderRadius: '20px', display: "inline-flex", alignItems: 'center', fontSize: '1rem', justifyContent: 'center'}} class = "FilterButton" key={index} value={type.value} onClick={handleForums}>
              {type.name}
          </Button> 
          </>
        ))}
      
      {filteredForums &&
        filteredForums.map(type => (
          
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

         
          
        ))}
    </>
  );
}

export default FilterForums;

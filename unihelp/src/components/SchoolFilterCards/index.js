import React, { useState, useEffect } from "react";
// import "./styles.css";
import "./forumElements.css"
import { buttons } from "./schools";
import { getForums, filterSchool, readComments } from "./filterSchools";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";


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
          
          <Card key = {type.id} id = {type.id} style={{marginBottom: '20px'}}>
            <Card.Header> {type.school} </Card.Header>
            <Card.Body>
              {/* collapsible card for comments */}
              <Card.Title> {type.forumTitle} </Card.Title>
              {type.content}
              
            </Card.Body>
            <Card.Footer>
              {/* insert comments one by one */}
              {type.comments}
            </Card.Footer>
            
            
          </Card>
        ))}
    </>
  );
}

export default FilterForums;

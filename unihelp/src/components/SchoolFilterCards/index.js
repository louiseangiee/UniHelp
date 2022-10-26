import React, { useState, useEffect } from "react";
// import "./styles.css";
import { buttons } from "./schools";
import { getForums, filterSchool, readComments } from "./filterSchools";
import Card from 'react-bootstrap/Card';



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
            <button key={index} value={type.value} onClick={handleForums}>
              {type.name}
            </button>
          </>
        ))}

      {filteredForums &&
        filteredForums.map(type => (
          
          <Card key = {type.id}>
            <Card.Body>
              <Card.Title> {type.forumTitle} </Card.Title>
              {type.content}
            </Card.Body>
            <Card.Footer>
              {/* insert comments */}
              {type.comments}
            </Card.Footer>
            
            
          </Card>
        ))}
    </>
  );
}

export default FilterForums;

import { useState } from 'react'
import React from 'react'
import Card from 'react-bootstrap/Card';

const filterList = ['All', 'NUS', 'NTU', 'SMU']

export default function FilterForums({ changeFilter }) {
  const [currentFilter, setCurrentFilter] = useState('all')

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter)
    changeFilter(newFilter)
  }

  const cardImages = {
    width: '50%',
    height: '50%'
  }

  
  return (
    <div className="project-filter">
      <nav>
        <div id = "cardRow" class ="row g-3">
          {filterList.map((f) => (
            <div class = "col-xl-3 col-lg-6 col-md-6" key={f}>
              <Card 
                onClick={() => handleClick(f)} 
                bg = {currentFilter === f ? 'primary' : ''}
                text={currentFilter === f ? 'white' : 'dark'}
                >
                <Card.Body>
                  <Card.Img variant='top' className="img-fluid" class = "logos" src = {`logos/${f}_logo.png`} style={cardImages}/>
                  <Card.Title id = {`${f} title`} class = "CardSchoolTitle" style={{textAlign: 'center'}}>{f}</Card.Title>
                </Card.Body>
              </Card>
          </div>
        ))}
        </div>
      </nav>
    </div>
  )
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

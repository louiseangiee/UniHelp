import { useState } from 'react'
import React from 'react'
import Card from 'react-bootstrap/Card';
import { CenterFocusStrong } from '@material-ui/icons';
import { FilterCard } from './FilterCardElements';

const filterList = ['All', 'NUS', 'NTU', 'SMU']

export default function FilterForums({ changeFilter }) {
  const [currentFilter, setCurrentFilter] = useState('all')

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter)
    changeFilter(newFilter)
  }

  const cardImages = {
    width: '50%',
    height: '60%',
    objectFit: 'contain',

  }

  
  return (
    <div className="project-filter">
      <nav>
        <div id = "cardRow" className ="row g-3">
          {filterList.map((f) => (
            <div className = "col-xl-3 col-lg-6 col-md-6" key={f}>
              <FilterCard 
                onClick={() => handleClick(f)} 
                bg = {currentFilter === f ? 'primary' : ''}
                text={currentFilter === f ? 'white' : 'dark'}>
                <Card.Body>
                  <Card.Img variant='top' className="img-fluid" className = "logos" src = {`logos/${f}_logo.png`} style={cardImages}/>
                  <Card.Title id = {`${f} title`} className = "CardSchoolTitle" style={{textAlign: 'center', fontSize: '25px'}}>{f}</Card.Title>
                </Card.Body>
              </FilterCard>
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

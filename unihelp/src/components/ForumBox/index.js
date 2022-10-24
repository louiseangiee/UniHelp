//MAIN FORUMBOX please send help im fucking dying

import React, { useState } from "react";
import "./ForumBoxElements.css";
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  function ForumBox({
    forumTitle,
    datePosted,
    content,
    upvotes,
    numComments,
    id,
    comments,
    
    }) {
    
    //Add function
        
    

    return(
        <div>
            <Card>

            </Card>
        </div>
    );

}


export default ForumBox

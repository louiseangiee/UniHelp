import Button from "react-bootstrap/esm/Button";

import React, { useState, useEffect } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import Tooltip from "react-bootstrap/Tooltip";


function AddPostButton(){
    
    
    
    return(
        <>
        <OverlayTrigger placement="top" overlay={<Tooltip id= "addPost"> Add a New Forum Post</Tooltip>}>
            <Button className='stretched-link ' href= "/AddPost" style = {{
                position: 'sticky',
                left: '95%',
                bottom: '20px',
                marginBottom:  '30px',
                marginRight: '30px',
                height: '100px',
                width: '100px',
                textAlign: "center",
                display: 'flex',
                borderRadius: '100px'
                }} dataT>
                <img src="/svgFiles/forumButtonWrite.png" style={{
                    width: '60%', 
                    height: '55%',
                    display: 'block',
                    margin: 'auto'
            }}></img>
            </Button>
        </OverlayTrigger>
       
        </>
        )
}



export default AddPostButton
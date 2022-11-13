import React, { useEffect, useState } from 'react'
import './Loading.css'

// import girl_loading from './pu'

export default function Loading() {
  const [imageIndex, setImageIndex] = useState(0)
  const loading_src_array = ['/pictures/unihelp_loading_1.gif', 'pictures/unihelp_loading_2.gif']
  useEffect(()=> {
    var min = 0;
    var max = Math.floor(loading_src_array.length);
    setImageIndex(Math.floor(Math.random() * (max - min) + min))
  }, [])

  console.log(imageIndex)
  
  return (
    <div className='loading-container'>
        <img src={loading_src_array[imageIndex]} width="150px" height="150px"/>
        <h4>Loading...</h4>
    </div>
  )
}

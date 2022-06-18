import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import data from './data';
import '../Css/Reviews.css'

const Reviews = () => {



const[index,setIndex]=useState(0);
const{name,job,image,text}=data[index];
// console.log(index)
const right=()=>{

setIndex((index+1)%(data.length))
}
const left=()=>{

  
 if(index>0){
    setIndex(index-1) 
  }
  else if(index===0){
   setIndex(data.length-1) 
  }
}
  return (
  <div className="main">
    <h2>Our Reviews</h2>
    <div className="container">
    <img className='img' src={image}/>
    <div className="text">


     <p>{name}</p>
     <p>{job}</p>
     <p>{text}</p>
     </div>
     <div className="arrow">
      <ChevronLeft fontSize="large"  onClick={left} />
      <ChevronRight fontSize="large" onClick={right} />
     </div> 
    </div>
   

  
  </div>
  )
}

export default Reviews
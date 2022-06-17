import React, { useState } from 'react'
import '../css/Tour.css'
const Tour = ({Tour,removeTour}) => {
    const[readMore,setReadMore]=useState(false);
    const {id,name,info,image,price}=Tour;
 
  return (
   <div>
     <div className="card">
    
         <img src={image}/>
        
       <div className="title">
        <h3>{name}</h3>
        <h3>${price}</h3>
       </div>
       <div className="info">
        <p>{readMore?info:`${info.substring(0,200)}...`}</p>
        <button onClick={()=>setReadMore(!readMore)} style={{backgroundColor: "white"}}>
        {readMore?'Show less' : 'Read more'}
        </button>
       </div>
       <div className="btn">
        <button onClick={()=>removeTour(id)} style={{backgroundColor: "white"}}>Not Interested</button>
       </div>
            
     </div>
   </div>
  )
}

export default Tour
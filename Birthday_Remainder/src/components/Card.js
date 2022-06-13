import React, { useState } from 'react'
import './Card.css';
import data from './Data'
import List from './List';
const Card = () => {
const[people,setPeople]=useState(data);

  return (
    
   <section>
   <div className="card">
   <h3>{people.length} Birthday Today</h3>
   <List people={people} />
   
 
    <button onClick={()=>setPeople([])}>clear all</button>
     
   </div>
    
 
   </section>
 
  
  )
}

export default Card;
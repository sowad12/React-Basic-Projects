import React from 'react'
import './List.css'
const List = ({people}) => {
  return (
  <>
 {people.map((person)=>{
   const{id,name,age,image}=person;
   return(
     <div key={id} className='person'>
     <div className="Img">
        <img src={image}/>
     </div>
     <div className="info">
      <h4>{name}</h4>
       
       <p>{age} years</p>
     </div>
      
     </div>
   )
 })

 }

  </>
  )
}

export default List
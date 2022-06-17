import React from 'react'
import Tour from './Tour'
import '../css/Tours.css'
const Tours = ({tours,removeTour}) => {
    // console.log(tours)
  return (
   <div>
    <div className="ToursContainer">
      <div className="ToursTitle">
        <h2>Our Tours</h2>
      </div>
      <div className='ToursData'>
        {tours.map((tour)=>{
           return <Tour key={tour.id} Tour={tour} removeTour={removeTour}/>
        })}
      </div>
    </div>
   </div>
  )
}

export default Tours
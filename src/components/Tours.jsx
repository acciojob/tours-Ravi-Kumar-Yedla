import React from 'react'
import Tour from './Tour'
const Tours = ({tours,RemoveTour}) => {
  return (
    <div>
      {tours.map(tour=>(
        <Tour key={tour.id} tour={tour} RemoveTour={RemoveTour}/>
      ))}
    </div>
  )
}

export default Tours

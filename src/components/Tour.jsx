import React, { useState } from 'react'

const Tour = ({tour,RemoveTour}) => {
      
    const[isExpand,setIsExpand] = useState(false)
     const {name,id,price,image,info} = tour

  const toggleButton = ()=>{
    setIsExpand(!isExpand);
  }
    return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h2>${price}</h2>
      
       <p  id={`tour-item-para-${id}`}>
        {isExpand ? info : `${info.substring(0, 200)}...`}
      <button onClick={toggleButton}>
        {isExpand? 'see Less': 'show more'}
      </button>
      </p>

      <button id={`delete-btn-${id}`} onClick={()=>RemoveTour(id)}>Delete</button>
    </div>
  )
}

export default Tour

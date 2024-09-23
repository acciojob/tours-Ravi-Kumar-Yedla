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
       <p>
        {/* {isExpand? info: `${info.subString(0,200)}...`} */}
        {isExpand ? info : `${info.substring(0, 200)}...`}
      <button onClick={toggleButton}>
        {isExpand? 'see Less': 'show more'}
      </button>
      </p>

      <button onClick={()=>RemoveTour(id)}>Delete</button>
    </div>
  )
}

export default Tour

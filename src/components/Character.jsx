import React, { useEffect, useState } from 'react'

const Character = (props) => {

  const [rotation, setRotation] = useState(0)

useEffect(()=> {
  console.log(rotation)
}, [rotation])

return(
  <li className='character'>
    <h2>{props.name}</h2>
    <div>
      <img 
        src={props.image} 
        alt={props.name} 
        style={
          {transform: `rotate(${rotation}deg)`}
        }
        onClick={() => {
            rotation === 0 ? setRotation(180) : setRotation(0)
            console.log(rotation)
          }}/>
    </div>
  </li>
)


}

export default Character
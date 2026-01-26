import React from 'react'

const RollsCount = (props) => {
  return (
    <div className='timer'>
        <p>Rolls:</p> 
        <p>{props.rollsCount}</p>
    </div>
  )
}

export default RollsCount
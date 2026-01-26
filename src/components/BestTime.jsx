import React from 'react'

const BestTime = (props) => {
  return (
    <div className='timer'>
        <p>Best Time: </p>
        <p>{props.bestTime === null ? '__:__ sec' : `${props.bestTime} sec`}</p>
    </div>
  )
}

export default BestTime
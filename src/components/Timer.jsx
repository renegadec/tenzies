import React from 'react'


const Timer = (props) => {

  return (
      <div className='timer'>
        <p>Time:</p> 
        <p><span>{props.minutes} min</span> <span>{props.seconds} sec</span></p>
      </div>
  )
}

export default Timer
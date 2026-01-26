import React from 'react'

const BestTime = (props) => {
  return (
    <div className='best-time'>
        Best Time: {props.bestTime === null ? '__:__ sec' : `${props.bestTime} sec`}
    </div>
  )
}

export default BestTime
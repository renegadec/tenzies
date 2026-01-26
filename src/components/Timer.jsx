import React from 'react'


const Timer = (props) => {

  return (
    <div className='timer-container'>
      <div className='timer'>
        <span>Time: {props.minutes}</span>:<span>{props.seconds}</span>:<span>{props.millisecs}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  )
}

export default Timer
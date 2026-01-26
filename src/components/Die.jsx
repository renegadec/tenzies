import React from 'react'



const Die = (props) => {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
  return (
    // <button 
    //   style={styles}
    //   onClick={props.hold}
    //   aria-pressed={props.isHeld}
    //   aria-label={`Die with value ${props.value}, 
    //             ${props.isHeld ? "held" : "not held"}`}
    // >{props.value}</button>

    <div style={styles} className={`die-face ${props.isHeld ? 'held' : ''}`} onClick={props.hold}>
      <img 
        src={`/assets/dice${props.value}.svg`} 
        alt={`Die ${props.value}`}
      />
    </div>
  )
}

export default Die

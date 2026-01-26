import { useState, useRef, useEffect } from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import { useStopwatch } from 'react-timer-hook';
import Timer from "./components/Timer"
import BestTime from "./components/BestTime";
import RollsCount from "./components/RollsCount";


export default function App() {  
    const {
        totalSeconds,
        milliseconds,
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false, interval: 100 });

    const [dice, setDice] = useState(() => generateAllNewDice())
    const [bestTime, setBestTime] = useState(null)
    const [rollsCount, setRollsCount] = useState(0)
    const buttonRef = useRef(null)


    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    useEffect(() => {
      if(gameWon) {
        pause()
        buttonRef.current.focus()

        setBestTime(oldBestTime => {
            if(oldBestTime === null) return totalSeconds
            return totalSeconds < oldBestTime ? totalSeconds : oldBestTime
            })
        }
    }, [gameWon])

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }

    function rollDice() {
        
        if(gameWon){
            reset()
            setDice(generateAllNewDice())
            setRollsCount(0)
        } else {
            
            setDice(oldDice => oldDice.map(die =>
            die.isHeld ?
                die :
                { ...die, value: Math.ceil(Math.random() * 6) }
            ))
            
            setRollsCount(prevCount  => prevCount + 1)
        }
    }

    function hold(id) {
        start()
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ))

    return (
        <main>
            
            
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="time-container">
                <Timer 
                    millisecs={milliseconds} 
                    seconds={seconds} 
                    minutes={minutes} 
                    start={start}
                    reset={reset}
                />
                <BestTime 
                    bestTime={bestTime}
                />
                <RollsCount 
                    rollsCount={rollsCount}
                />
            </div>

            
            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}
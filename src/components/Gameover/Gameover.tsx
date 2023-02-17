import React from 'react'
import { useSelector } from 'react-redux'
import './Gameover.css'

interface globalState {
    board: string[],
    currentPosition: number,
    attempt: number,
    correctWord: string,
    gameover: boolean
}

const Gameover =() => {
    // global state
    const correctWord = useSelector((state:globalState) => state.correctWord)
    const attempt = useSelector((state:globalState) => state.attempt)
    const gameover = useSelector((state:globalState) => state.gameover)

    return (
        <div className="gameOver">
            <h3>{gameover ? "Successful" : "Failed"}</h3>
            <h1>Correct word: {correctWord.toUpperCase()}</h1>
            {gameover && (
                <h3>You guessed in {attempt} attempts </h3>
            )}
        </div>
    )
}


export default Gameover
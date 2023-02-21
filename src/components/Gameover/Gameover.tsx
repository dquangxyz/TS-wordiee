import React from 'react'
import { useSelector } from 'react-redux'
import { globalState } from '../interface'
import './Gameover.css'

const Gameover =() => {
    // global state
    const correctWord = useSelector((state:globalState) => state.correctWord)
    const attempt = useSelector((state:globalState) => state.attempt)
    const gameover = useSelector((state:globalState) => state.gameover)

    return (
        <div className="gameover">
            {gameover && attempt <= 6 && <h3>You have successfully found the secret word</h3>}
            {!gameover && attempt === 6 && <h3>Oops, you failed to find out the secret word</h3>}
            {attempt === 6 && <h1>Correct word: {correctWord.toUpperCase()}</h1>}
            {gameover && <h3>You guessed in {attempt} attempts </h3>}            
        </div>
    )
}

export default Gameover
import React from 'react'
import './Instruction.css'

function Instruction() {
  return (
    <div className='instruction'>
        <p>Guess the secret word in 6 attempts</p>
        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
        <p>Example</p>
        <div className="row example">
            <div className="letter example grey-wrong">W</div>
            <div className="letter example grey-wrong">R</div>
            <div className="letter example green-correct">O</div>
            <div className="letter example yellow-almost">N</div>
            <div className="letter example grey-wrong">G</div>
        </div>
        <div>
            <p>The letter <span className="green-correct">O</span> is in the word and in the correct spot</p>
            <p>The letter <span className='yellow-almost'>N</span> is in the word but in the wrong spot</p>
            <p>The letters <span className='grey-wrong'>W, R, G</span> are not in the word in any spot</p>
        </div>
    </div>
  )
}

export default Instruction
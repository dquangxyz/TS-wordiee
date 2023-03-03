import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import Heading from './components/Heading/Heading';
import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/Keyboard';
import Gameover from './components/Gameover/Gameover';
import Instruction from './components/Instruction/Instruction';

import './App.css';

interface globalState {
  board: string[],
  currentPosition: number,
  attempt: number,
  correctWord: string,
  gameover: boolean
}

function App() {
  // global state
  const board = useSelector((state: globalState) => state.board)
  const gameover = useSelector((state: globalState) => state.gameover)

  // local state
  const [showRule, setShowRule] = useState<boolean>(false)

  return (
    <div className="App">
      <Heading type='h1' text='WORDIE' />
      <Heading type='h2' text='Another worlde clone game' />

      <div onClick={()=> setShowRule(!showRule)} className='how-to-play'>How to play</div>

      { showRule && <Instruction/>}  
      <div className='board-container'>
        <Board board={board} />
      </div>

      <Keyboard />
      <Gameover />
    </div>
  );
}

export default App;

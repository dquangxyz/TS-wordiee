import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import Heading from './components/Heading/Heading';
import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/Keyboard';

import './App.css';

interface globalState {
  board: string[],
  currentPosition: number,
  attempt: number,
  correctWord: string
}

function App() {
  const board = useSelector((state: globalState) => state.board)

  return (
    <div className="App">
      <Heading type='h1' text='WORDIE' />
      <Heading type='h2' text='Another worlde clone game' />
      <div className='board-container'>
        <Board board={board} />
      </div>
      <Keyboard />
    </div>
  );
}

export default App;

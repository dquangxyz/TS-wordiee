import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { boardActions } from '../../redux/store'
import Key from './Key'

import './Keyboard.css'

const Keyboard: React.FC = () => {
    const dispatch = useDispatch()
    // const rows: string[] = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"]
    const rows: string[][] = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Z", "X", "C", "V", "B", "N", "M"]
    ]

    useEffect(()=>{
      document.addEventListener('keydown', (e)=>{
        if (e.key === "Backspace"){
          dispatch(boardActions.deleteLetter())
        } else if (e.key === "Enter"){
          dispatch(boardActions.enterNextAttempt())
        } else {
          dispatch(boardActions.addNewLetter(e.key.toUpperCase()))
        }
      })
    }, [])

    // handler functions
    const handlerBackspace = () => {
      dispatch(boardActions.deleteLetter())
    }

  return (
    <div className='keyboard-container'>
        {rows.map((row) => {
          return (
            <div className='row'>
              {row.map((letter, index) => {
                return (
                  <>
                  {letter === "Z" && <div className='letter'>Enter</div>}

                  <div className='letter'>
                    <Key letter={letter}/>
                  </div>

                  {letter === "M" && <div className='letter' onClick={handlerBackspace}>Backspace</div>}
                  </>
                )
              })}

            </div>
          )
        })}
    </div>
  )
}

export default Keyboard
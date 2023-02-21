import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { boardActions } from '../../redux/store'
import Key from './Key'

import './Keyboard.css'

const Keyboard: React.FC = () => {
  // global state
  const dispatch = useDispatch()

  const rows: string[][] = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
  ]

  useEffect(()=>{
    document.addEventListener('keydown', (e)=>{
      let val = e.key.toUpperCase()
      if (e.key === "Backspace"){
        dispatch(boardActions.deleteLetter())
      } else if (e.key === "Enter"){
        dispatch(boardActions.enterNextAttempt())
      } else if (rows[0].includes(val) || rows[1].includes(val) || rows[2].includes(val)) {
        dispatch(boardActions.addNewLetter(val))
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
                  {letter === "Z" && <div className='letter-box-special'>Enter</div>}

                  <div className='letter-box'>
                    <Key letter={letter}/>
                  </div>

                  {letter === "M" && <div className='letter-box-special' onClick={handlerBackspace}>Backspace</div>}
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
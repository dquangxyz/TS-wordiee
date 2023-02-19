import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { boardActions } from '../../redux/store'
import { globalState } from '../interface'
import './Key.css'

interface IProps {
    letter: string
}

interface ArchiveState {
  "wrong": string[],
  "correct": string[],
  "almost": string[]
}


const Key: React.FC<IProps> = (props) => {
  // global state management
  const dispatch = useDispatch()
  const correctWord = useSelector((state: globalState) => state.correctWord)
  const attempt = useSelector((state: globalState) => state.attempt)
  const currentPosition = useSelector((state:globalState)=> state.currentPosition)
  const guessedWords = useSelector((state: globalState) => state.guessedWords)


  // local state
  const [checkedColor, setCheckedColor] = useState<string>("")
  const [archive, setArchive] = useState<ArchiveState>({
    "wrong": [],
    "correct": [],
    "almost": []
  })

  // handler function
  const handleChooseLetter = () => {
    dispatch(boardActions.addNewLetter(props.letter))
  }

  useEffect(()=>{
    const guessedLetters = guessedWords.join("").split("").sort()
    console.log(guessedLetters)

    if (guessedLetters.includes(props.letter)){ // change color of guessed letter only
      if (!correctWord.includes(props.letter)){
        setCheckedColor("grey-wrong")
      } else {
        setCheckedColor("green-correct")
      }
    }
  }, [guessedWords])

  return (
    <div className={`letter ${checkedColor}`} onClick={handleChooseLetter}>
      {props.letter}
    </div>
    
  )
}

export default Key
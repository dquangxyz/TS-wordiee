import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { boardActions } from '../../redux/store'
import { globalState } from '../interface'
import './Key.css'

interface IProps {
    letter: string
}

interface ArchiveProps {
  "wrong": string[],
  "correct": string[],
  "almost": string[]
}


const Key: React.FC<IProps> = (props) => {
  // global state management
  const dispatch = useDispatch()
  const correctWord = useSelector((state: globalState) => state.correctWord)
  const guessedWords = useSelector((state: globalState) => state.guessedWords)


  // local state
  const [checkedColor, setCheckedColor] = useState<string>("")
  const archive: ArchiveProps = {
    "wrong": [],
    "correct": [],
    "almost": []
  }

  // handler function
  const handleChooseLetter = () => {
    dispatch(boardActions.addNewLetter(props.letter))
  }

  const correctWordArr = correctWord.split("")

  useEffect(()=>{
    const guessedLetters = guessedWords.join("").split("").sort()
    guessedWords.forEach(word => {
      for (let i=0; i<5; i++){
        if (word.charAt(i) === correctWord.charAt(i)){
          archive.correct.push(word.charAt(i))
        } else if (correctWordArr.includes(word.charAt(i))) {
          archive.almost.push(word.charAt(i))
        } else if (!correctWordArr.includes(word.charAt(i))) {
          archive.wrong.push(word.charAt(i))
        }
      }
    })

    console.log(archive)

    if (guessedLetters.includes(props.letter)){ // change color of guessed letter only
      if (archive.correct.includes(props.letter)){
        setCheckedColor("green-correct")
      } else if (archive.almost.includes(props.letter)) {
        setCheckedColor("yellow-almost")
      } else if (archive.wrong.includes(props.letter)) {
        setCheckedColor("grey-wrong")
      }
    }
  }, [guessedWords, archive])
  



  return (
    <div className={`letter ${checkedColor}`} onClick={handleChooseLetter}>
      {props.letter}
    </div>
    
  )
}

export default Key
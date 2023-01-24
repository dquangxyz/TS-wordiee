import React from 'react'
import { useDispatch } from 'react-redux'

import { boardActions } from '../../redux/store'
import './Key.css'

interface IProps {
    letter: string
}

const Key: React.FC<IProps> = (props) => {
  // state management
  const dispatch = useDispatch()

  // handler function
  const handleChooseLetter = () => {
    dispatch(boardActions.addNewLetter(props.letter))
  }

  return (
    <div className='letter' onClick={handleChooseLetter}>
      {props.letter}
    </div>
  )
}

export default Key
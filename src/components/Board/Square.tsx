import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import './Square.css'

interface IProps {
    val: string,
    index: number
}
interface globalState {
  board: string[],
  currentPosition: number,
  attempt: number,
  correctWord: string
}


const Square: React.FC<IProps> = (props) => {
  // global state
  const correctWord = useSelector((state: globalState) => state.correctWord)
  const attempt = useSelector((state: globalState) => state.attempt)
  const currentPosition = useSelector((state:globalState)=> state.currentPosition)

  // local state
  const [checkedColor, setCheckedColor] = useState<string>("")

  
  useEffect(()=>{
    if (props.index/5 < attempt){ // only show colors in already-checked line(s)
      if (props.val.toUpperCase() === correctWord.toUpperCase().charAt(props.index%5)){
        setCheckedColor("green-correct")
      } else if (correctWord.toUpperCase().includes(props.val) && props.val !== ""){
        setCheckedColor("yellow-almost")
      } else if (props.val !== ""){
        setCheckedColor("grey-wrong") 
      } else {
        setCheckedColor("") 
      }
    }
    
  }, [props.val, props.index, attempt])


  return (
    <Fragment>
        <div className={currentPosition <= (1+attempt)*5 ? `square ${checkedColor}` : 'square'}>{props.val}</div>
    </Fragment>
  )
}

export default Square
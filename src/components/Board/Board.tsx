import React, { Fragment } from 'react'
import Square from './Square'
import './Board.css'

interface IProps {
    board: string[]
}

const Board: React.FC<IProps> = (props) => {
  return (
    <Fragment>
        <div className='board'>
            {props.board.map((item, index) => (
                <Square val={item} index={index}/>
            ))}
        </div>
    </Fragment>
  )
}

export default Board
import React, { Fragment } from 'react'

import './Square.css'

interface IProps {
    val: string,
    index: number
}

const Square: React.FC<IProps> = (props) => {
  return (
    <Fragment>
        <div className='square'>{props.val}</div>
    </Fragment>
  )
}

export default Square
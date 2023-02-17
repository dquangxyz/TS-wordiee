import React from 'react'

import './Heading.css'

interface HeadingProps {
    type: string,
    text: string
}

// type React.FC for functional component
const Heading: React.FC<HeadingProps> = (props) => {
  return (
        <div className={`heading-${props.type}`}>{props.text}</div>
  )
}

export default Heading
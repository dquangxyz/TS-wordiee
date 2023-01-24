import React from 'react'

import './Heading.css'

interface HeadingProps {
    type: string,
    text: string
}

// type React.FC for functional component
const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <div>
        <p className={`heading-${props.type}`}>
            {props.text}
        </p>
    </div>
  )
}

export default Heading
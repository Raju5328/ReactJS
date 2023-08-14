import React from 'react'
import './styles.css'

function Paragraph(props) {
  return (
    <div>
      <p className='para'>I am a {props.name}</p>
      <p className='para'>I am a {props.name}</p>
    </div>
  )
}

export default Paragraph

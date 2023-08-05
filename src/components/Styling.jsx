import React from 'react'
import './mystyle.css'
function Styling(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className}`}>My name is Darshan</h1>
    </div>
  )
}

export default Styling
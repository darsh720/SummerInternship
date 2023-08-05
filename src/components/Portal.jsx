import React from 'react'
import ReactDom from 'react-dom' 

function Portal() {
  return ReactDom.createPortal (
    <div>
        Portal Demo
    </div>,
    document.getElementById('first')
  )
}

export default Portal

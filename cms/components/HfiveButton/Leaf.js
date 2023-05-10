import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        fontSize:"1.8em"
    }}>
        {children}
    </span>
  )
}

export default Leaf
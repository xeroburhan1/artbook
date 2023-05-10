import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        fontSize:"2.2em"
    }}>
        {children}
    </span>
  )
}

export default Leaf
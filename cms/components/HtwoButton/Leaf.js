import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        fontSize:"3em"
    }}>
        {children}
    </span>
  )
}

export default Leaf
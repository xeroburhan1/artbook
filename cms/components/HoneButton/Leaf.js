import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        fontSize:"3.4em"
    }}>
        {children}
    </span>
  )
}

export default Leaf
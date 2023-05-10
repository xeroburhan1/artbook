import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        fontSize:"2.6em"
    }}>
        {children}
    </span>
  )
}

export default Leaf
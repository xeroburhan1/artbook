import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        fontSize:"1.4em"
    }}>
        {children}
    </span>
  )
}

export default Leaf
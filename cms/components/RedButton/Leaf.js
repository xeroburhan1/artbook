import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        color:"red"
    }}>
        {children}
    </span>
  )
}

export default Leaf
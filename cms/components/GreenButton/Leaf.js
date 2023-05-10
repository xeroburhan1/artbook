import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        color:"green"
    }}>
        {children}
    </span>
  )
}

export default Leaf
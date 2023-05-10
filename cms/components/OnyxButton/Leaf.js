import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        color:"#353839"
    }}>
        {children}
    </span>
  )
}

export default Leaf
import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        color:"#555555"
    }}>
        {children}
    </span>
  )
}

export default Leaf
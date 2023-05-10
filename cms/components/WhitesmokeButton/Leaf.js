import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        color:"#F5F5F5"
    }}>
        {children}
    </span>
  )
}

export default Leaf
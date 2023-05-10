import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        fontWeight: 'bold'
    }}>
        {children}
    </span>
  )
}

export default Leaf
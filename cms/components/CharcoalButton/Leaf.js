import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        color:"#36454F"
    }}>
        {children}
    </span>
  )
}

export default Leaf
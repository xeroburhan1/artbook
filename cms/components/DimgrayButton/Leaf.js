import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        color:"#696969"
    }}>
        {children}
    </span>
  )
}

export default Leaf
import React from 'react'

function Leaf({attributes,children}) {
  return (
    <span {...attributes} style={{
        color:"#555D50"
    }}>
        {children}
    </span>
  )
}

export default Leaf
import React from 'react'

function Leaf({attributes,children}) {
  return (
    <div {...attributes} style={{
        textAlign:'left'
    }}>
        {children}
    </div>
  )
}

export default Leaf
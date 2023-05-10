import React from 'react'

function Leaf({attributes,children}) {
  return (
    <div {...attributes} style={{
        textAlign:'right'
    }}>
        {children}
    </div>
  )
}

export default Leaf
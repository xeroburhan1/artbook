import React from 'react'

function Leaf({attributes,children}) {
  return (
    <div {...attributes} style={{
        textAlign:'center'
    }}>
        {children}
    </div>
  )
}

export default Leaf
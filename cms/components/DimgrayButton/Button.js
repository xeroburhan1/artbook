import {LeafButton} from 'payload/components/rich-text'
import React from 'react'
//import {FaBold} from 'react-icons/fa'
function Button() {
  return (
    <LeafButton format='dimgray'>
      <div style={{
        width:"20px",
        height: "100%",
        backgroundColor: "#696969"
      }}> </div>
    </LeafButton>
    
  )
}

export default Button
import {LeafButton} from 'payload/components/rich-text'
import React from 'react'
//import {FaBold} from 'react-icons/fa'
function Button() {
  return (
    <LeafButton format='davysgray'>
      <div style={{
        width:"20px",
        height: "100%",
        backgroundColor: "#555555"
      }}> </div>
    </LeafButton>
    
  )
}

export default Button
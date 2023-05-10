import {LeafButton} from 'payload/components/rich-text'
import React from 'react'
//import {FaBold} from 'react-icons/fa'
function Button() {
  return (
    <LeafButton format='onyx'>
      <div style={{
        width:"20px",
        height: "100%",
        backgroundColor: "#353839"
      }}> </div>
    </LeafButton>
    
  )
}

export default Button
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export default function Navbar(props) {
 
  const [nav, setNav] = useState([])

  useEffect(() => {
    setNav(props)
    console.log(props)
  },[props])
  
  return (
    <div><h5>nav</h5></div>
  )
}

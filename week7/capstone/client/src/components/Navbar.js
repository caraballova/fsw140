import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){
  return (
    <div id = "navbar">
      <Link to='/public'>Home</Link>
      <Link to='/products'>Products</Link>
    </div>
  )
}

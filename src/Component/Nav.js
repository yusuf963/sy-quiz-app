import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ()=>{
  return (
    <>
    <Link to='/'>Home</Link>
    <Link to ='/quiz'>Quiz</Link>
    <Link to ='/about'>About</Link>
    </>
  )
}

export default Nav
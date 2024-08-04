import React from 'react'
import logo from "./images/logo.png";
const Logo = () => {
  return (
    <div className='logo-center'>
    <nav>
         <img src={logo} className='logo' alt="name" />
        <h1>Jobster</h1>
    </nav>
    </div>
  )
}

export default Logo
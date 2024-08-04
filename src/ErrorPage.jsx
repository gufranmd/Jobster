import React from 'react'
import error from "./images/error-image.svg"
import { Link } from 'react-router-dom'
import Logo from './Logo'
const ErrorPage = () => {
  return (<>
  <Logo/>
    <div className='main-container'>
      
        <div>
        <img src={error} alt="" /><br/>
       <Link to="/" >
        <button className='btn btn-hero'>back to home</button>
       </Link>
        <h3>Oops! Page not found</h3>
        <p>we can not find the contents that you are looking for!</p>
        </div>
    </div>
    </>
  )
}

export default ErrorPage
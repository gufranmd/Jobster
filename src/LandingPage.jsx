import React from 'react'
import logo from "./images/logo.png";
import main from "./images/main-image.svg"
import Logo from './Logo';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <main>
      <div className='inside-main'>
        {/* <img src={logo} className='logo' alt="name" />
        <h1>Jobster</h1> */}
        <Logo/>
        

<div className="container page">
    <div className="info">
<h1>job <span>tracking</span> app</h1>
<p>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit.
     Deserunt itaque voluptate nisi
      aliquam recusandae cumque iste
       cum, odio magnam assumenda.
</p>
<Link to="/login">
<button className='btn btn-hero'>Login/Register</button></Link>
    </div>
    <img src={main} className='img main-img' width={400} alt="" />
</div>
</div>
     </main>
  )
};


export default LandingPage
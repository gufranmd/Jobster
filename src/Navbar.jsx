import React, { useContext, useRef, useState } from 'react'
import {FaBars} from 'react-icons/fa';
import { Icons } from 'react-toastify'
import MyContext from './MyContext';
import NoteContext from './NoteContext';
import SmallSidebar from './SmallSidebar';
import BigSidebar from './BigSidebar';
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";

import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
const [showllogout,setShowlogout]=useState(false);
  const {contextUser,sidebaropen,setSidebaropen}=useContext(MyContext);
  let tempData=JSON.parse(localStorage.getItem('myloginuser'))||[];

  return (
   
    <div className='navbar'>
      <button className='mybtn-icon' onClick={()=>setSidebaropen(!sidebaropen)}><FaBars/></button>
      <div style={{position:'relative'}}>
      <button className='mybtn btn-hero '>{tempData[0].lastName}{showllogout?<IoMdArrowDropup style={{marginLeft:'5px',fontSize:'15px'}} onClick={()=>setShowlogout(!showllogout)}/>:<IoMdArrowDropdown style={{marginLeft:'5px',fontSize:'15px'}} onClick={()=>setShowlogout(!showllogout)}/>} </button>
      {showllogout && <Link  to="/login" className='btn btn-hero ' style={{position:'absolute',top:'35px', left:'50px',fontSize:'16px',padding:'5px',backgroundColor:'#41a9ee'}}>logout</Link>
}
</div>
    </div>

  )
}

export default Navbar
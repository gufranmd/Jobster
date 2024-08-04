import React, { useContext } from 'react'
import {FaTimes} from 'react-icons/fa';
import NoteContext from './NoteContext';
import MyContext from './MyContext';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    const {sidebaropen,setSidebaropen}=useContext(MyContext);
  return (
    <div className={ sidebaropen?'sidebar sidebar-show':'sidebar sidebar-hide'}>
    <div className='sidebar-upper-main'>
   
        <div className="sidebar-main">
          <Logo/>
            <button className='cross-icon'>
                <FaTimes onClick={()=>setSidebaropen(!sidebaropen)}/>
            </button>

            <ul style={{padding:'1rem'}}>
        <a>
          <li>
            <NavLink to="/mystats" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={()=>setSidebaropen(!sidebaropen)}>My Stats</NavLink>
       
          
            </li>
        </a>
        <a>
        <li>
        <NavLink to="/myprofile" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={()=>setSidebaropen(!sidebaropen)}>My Profile</NavLink>
          
            </li>
        </a>
        <a>
        <li>
        <NavLink to="/addjob" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={()=>setSidebaropen(!sidebaropen)}>Add Job</NavLink>
          
            </li>
        </a>
        <a>
          <li>
          <NavLink to="/alljobs" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} onClick={()=>setSidebaropen(!sidebaropen)}>All Jobs</NavLink>
          </li>
        </a>
      </ul>
        </div>
    </div>
    </div>
   
  )
}

export default Sidebar
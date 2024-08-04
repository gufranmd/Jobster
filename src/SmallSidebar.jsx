import React from 'react'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'

const SmallSidebar = () => {
  return (
    <div  className='small-sidebar'>
      <Logo/>
      <ul style={{padding:'1rem'}}>
        <a>
          <li>
            <NavLink to="/mystats" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>My Stats</NavLink>
       
          
            </li>
        </a>
        <a>
        <li>
        <NavLink to="/myprofile" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>My Profile</NavLink>
          
            </li>
        </a>
        <a>
        <li>
        <NavLink to="/addjob" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>Add Job</NavLink>
          
            </li>
        </a>
        <a>
          <li>
          <NavLink to="/alljobs" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>All Jobs</NavLink>
          </li>
        </a>
      </ul>
    </div>
  )
}

export default SmallSidebar
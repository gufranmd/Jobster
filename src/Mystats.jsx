import React, { useContext } from 'react'
import SmallSidebar from './SmallSidebar'
import BigSidebar from './BigSidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import NoteContext from './NoteContext'
import Sidebar from './Sidebar'
import MyContext from './MyContext'
import Mystats_code from './Mystats_code'
const Mystats = () => {
  const {sidebaropen,setSidebaropen}=useContext(MyContext);
  return (
    <>
      <Sidebar/>
    <main className={sidebaropen?'hide-content':''}>
      <Navbar/>
    <SmallSidebar/>
   <Mystats_code/>
    </main>
    </>
  
  )
}

export default Mystats
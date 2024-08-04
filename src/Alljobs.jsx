import React, { useContext } from 'react'
import SmallSidebar from './SmallSidebar'
import BigSidebar from './BigSidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import NoteContext from './NoteContext'
import Sidebar from './Sidebar'
import MyContext from './MyContext'
import Addjob_code from './Addjob_code'
import Alljobs_code from './Alljobs_code'
import Showjobs from './Showjobs'

const Alljobs = () => {
  const {sidebaropen,setSidebaropen}=useContext(MyContext);
  
  return (
    <>
      <Sidebar/>
    <main className={sidebaropen?'hide-content':''}>
      <Navbar/>
    <SmallSidebar/>
  <Alljobs_code/>
   
    </main>
    </>
  
  )
}

export default Alljobs;
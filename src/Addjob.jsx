import React, { useContext } from 'react'
import SmallSidebar from './SmallSidebar'
import BigSidebar from './BigSidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import NoteContext from './NoteContext'
import Sidebar from './Sidebar'
import MyContext from './MyContext'
import Addjob_code from './Addjob_code'
import Editjobs_code from './Editjobs_code'
const Addjob = () => {
  const {sidebaropen,setSidebaropen,editJob}=useContext(MyContext);
  
  return (
    <>
      <Sidebar/>
    <main className={sidebaropen?'hide-content':''}>
      <Navbar/>
    <SmallSidebar/>
   {editJob? <Editjobs_code/>:<Addjob_code/>}
 
  
    </main>
    </>
  
  )
}

export default Addjob;
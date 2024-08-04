import React, { useContext, useState } from 'react'
import SmallSidebar from './SmallSidebar'
import BigSidebar from './BigSidebar'
import Navbar from './Navbar'
import { Outlet, useSearchParams } from 'react-router-dom'
import NoteContext from './NoteContext'
import Sidebar from './Sidebar'
import MyContext from './MyContext'
const Myprofile = (props) => {
  const {sidebaropen,setSidebaropen}=useContext(MyContext);



  return (
    <>
      <Sidebar/>
    <main className={sidebaropen?'hide-content':''}>
      <Navbar/>
    <SmallSidebar/>
   <BigSidebar />
    </main>
    </>
  
  )
}

export default Myprofile
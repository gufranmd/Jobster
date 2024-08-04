import React, {useState } from 'react'
import MyContext from '../src/MyContext'

const NoteContext = ({children}) => {
    const [sidebaropen,setSidebaropen]=useState(false);
    const [contextUser,setContextUser]=useState({});
    const [editJob,setEditJob]=useState(false);
     const [pagenum,setPagenum]=useState(Number(1));
   
  return (
    <MyContext.Provider value={{pagenum,setPagenum,editJob,setEditJob,contextUser,setContextUser,sidebaropen,setSidebaropen}}>
        {children}

    </MyContext.Provider>
  )
}

export default NoteContext;
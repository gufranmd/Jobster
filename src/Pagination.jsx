import React, { useContext, useState } from 'react'
import MyContext from './MyContext';
import { IoMdFastforward } from "react-icons/io";
import { AiFillBackward } from "react-icons/ai";

const Pagination = () => {
    const {pagenum,setPagenum} = useContext(MyContext);
    const [mainpage,setmainpage]=useState(pagenum);
  
   const createArray=(count)=>{
   let  result=[];
   for(var i=1;i<=count;i++){
    result.push(i);
   }
   return result;

    }

    let jobContainer=JSON.parse(localStorage.getItem('myjobs'))||[];
    const count=Math.ceil((jobContainer.length)/2);
const arr=createArray(count);

    const handle=(num)=>{
        setPagenum(num);
        setmainpage(num);
    }
  const bankward=()=>{
    if(pagenum==1){
        setmainpage(count);
        setPagenum(count);
       
    }else{
        setmainpage(pagenum-1)
        setPagenum(pagenum-1)
      
     
    }
  }

  const forward=()=>{
    if(pagenum==count){
        setmainpage(1);
        setPagenum(1);
  
    
    }else{
        setmainpage(pagenum+1)
        setPagenum(pagenum+1)
       
      
    }
  }
   
 
 
  return (
    <div className='pagination'>
         <button className='page-btn' onClick={bankward}><AiFillBackward/></button>
        {arr.map((num)=>{
            return(
                <button onClick={()=>handle(num)} className={num===mainpage?'page-btn main-page':'page-btn'}>{num}</button>
            )
        })}
        <button className='page-btn' onClick={forward}><IoMdFastforward/></button>
    </div>
  )
}

export default Pagination
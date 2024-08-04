import React, { useContext, useState } from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import {  useNavigate, useSearchParams } from 'react-router-dom';
import emptyLogo from './images/No jobs.svg';
import MyContext from './MyContext';
import { ToastContainer, toast } from 'react-toastify';
import Alljobs_code from './Alljobs_code';
import Pagination from './Pagination';
const Showjobs = () => {
        const {setEditJob,pagenum,setPagenum}=useContext(MyContext);
        let jobContainer=JSON.parse(localStorage.getItem('myjobs'))||[];
        console.log(jobContainer)
        const [allJobsView,setJobsView]=useState(jobContainer);
        const navigate=useNavigate();
        const handleDelete=(e,date)=>{
                const permit=window.confirm('Are you sure?');
                if(permit){
                e.preventDefault();
                jobContainer=jobContainer.filter((job)=>job.date!==date);
                localStorage.setItem('myjobs',JSON.stringify(jobContainer));
                setJobsView(jobContainer);
                toast.success('Job has been removed!')
        }

        }
      
        console.log(typeof(allJobsView));
        const handleEdit=(position,company,jobLocation,status,jobType,date)=>{
                setEditJob(true);
                const updateJob={position,company,jobLocation,status,jobType,date};
                localStorage.setItem('updateJob',JSON.stringify(updateJob));
                navigate("/addjob");
        }

  return (
        <>    <ToastContainer position='top-center'/>
      
    <div className='job-container'>
        <div className='job-grid'>
     {allJobsView.length>0?allJobsView.slice((pagenum-1)*2,(pagenum*2)).map((jobs)=>{
      

                return(<div className='job-container-box'>
                        <div className='flex-view'>
                        <div className='color-box place-item-center' >
                                <div>{jobs.company.slice(0,1)}</div>
                         </div>
                       <div className='inner-view'>
                       <h2>{jobs.company}</h2>
                       <p>{jobs.position}</p>
                       </div>
                </div>
                <hr/>

                    <div className='grid-view'>
                 <div>
                <p><FaLocationArrow style={{marginRight:'8px'}}/>{jobs.jobLocation}</p>
                <p><MdOutlineWork style={{marginRight:'8px'}}/>{jobs.jobType}</p>
                </div>

                <div>
                <p><FaCalendarAlt style={{marginRight:'8px'}}/>{new Date(jobs.date).toString().slice(4,15)}</p>
                <p className={jobs.status} >{jobs.status}</p>
              
                </div>

                </div>

                <button className=' btn-simple edit-color'onClick={()=>handleEdit(jobs.position,jobs.company,jobs.jobLocation,jobs.status,jobs.jobType,jobs.date)} >edit</button>
                <button className='btn-simple delete-color' onClick={(e)=>handleDelete(e,jobs.date)}>delete</button>


                </div>)
        }): <div className="">
                <div className="place-item-center" style={{marginTop:'5rem'}}>
                <img src={emptyLogo} style={{width:'50%'}} ></img>
                </div>
                
                <h3 style={{textAlign:'center'}}>Oops! No more jobs are here.</h3>
              
        </div> }
       
        </div>
<div className='set-page-position'>
        <Pagination/>
        </div>
        </div>
      
       
      
      

        </>

  )
}

export default Showjobs;
import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import MyContext from './MyContext';


const Editjobs_code = () => {
  const {editJob,setEditJob}=useContext(MyContext);
  const [btnDisable,setBtnDisable]=useState(false);
  let updateJob=JSON.parse(localStorage.getItem('updateJob'))||[];

  const initalValues={
    position:updateJob.position,
    company:updateJob.company,
    jobLocation:updateJob.jobLocation,
    status:updateJob.status,
    jobType:updateJob.jobType
  }

  const [allJob,setAllJob]=useState(initalValues);
  const jobType=['job-type','full-time','part-time','internship','remotely'];
  const status=['status','interview','decline','pending']
  let jobContainer=JSON.parse(localStorage.getItem('myjobs'))||[];
  const handleChange = (e, field) => {
    setAllJob((prevUserData) => ({
        ...prevUserData,
        [field]: e.target.value
      }));
    };

    const deleteJob=(date)=>{
        jobContainer=jobContainer.filter((Mine)=>Mine.date!==date);
        localStorage.setItem('myjobs',JSON.stringify(jobContainer));
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      const {position,company,status,jobLocation,jobType}=allJob;
      deleteJob(updateJob.date);
      if(!position||!company||!status||!jobLocation||!jobType){
        toast.error("please fill all credentials!");
      }else{
        jobContainer=[...jobContainer,{position,company,status,jobLocation,jobType,date:Date.now()}]
        localStorage.setItem('myjobs',JSON.stringify(jobContainer));
        console.log(jobContainer);
        setBtnDisable(!btnDisable);
        setAllJob({
          position:'',
          company:'',
          status:'',
          jobLocation:'',
          jobType:''
        });
        setEditJob(false);
        toast.success("job is updated succesfully!");
      }
    }

    const handleEdit=(e)=>{
      e.preventDefault();
      setEditJob(false);
    }

  return (
    <div className='big-sidebar' >
          <ToastContainer position='top-center' theme='dark'/>
      <div className='big-sidebar-profile'>
        <h3>Edit Job</h3>
        <form>
          <input  className='input' placeholder='position' type='text' name='position' value={allJob.position} onChange={(e)=>handleChange(e,'position')}/>
          <input  className='input' placeholder='company' type='text' name='company' value={allJob.company} onChange={(e)=>handleChange(e,'company')}/>
          <input   className='input' placeholder='job-location' type='text' value={allJob.jobLocation} name='jobLocation' onChange={(e)=>handleChange(e,'jobLocation')}/>
          <select className='input' name='status' value={allJob.status} onChange={(e)=>handleChange(e,'status')}>
            {status.map((s)=>{
              return(<option value={s}>{s}</option>)
            })}
          </select>
          <select className='input' name='jobType' value={allJob.jobType} onChange={(e)=>handleChange(e,'jobType')}>
            {jobType.map((job)=>{
              return(<option value={job}>{job}</option>)
            })}
          </select>
          <button className={btnDisable?'btn disabled-btn':'btn btn-hero'} onClick={handleEdit} >Cancel Edit.</button>
          <button className={btnDisable?'btn disabled-btn':'btn btn-hero'} onClick={handleSubmit} disabled={btnDisable}>update changes.</button>
        </form>

      </div>
    </div>
  )
}

export default Editjobs_code;
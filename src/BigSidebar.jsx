import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MyContext from './MyContext';

const BigSidebar = () => {
  const {contextUser,setContextUser}=useContext(MyContext);
 
//  let  tempData=JSON.parse(localStorage.getItem('valid-users'))||[];
 let tempData=JSON.parse(localStorage.getItem('myloginuser'))||[];
 console.log('hiiiiii');
 console.log(tempData[0].firstName);

//  tempData=tempData.filter((user)=>user.email===contextUser.email);


 const [edit,setEdit]=useState(false);
  const [userData,setUserData]=useState({
    firstName:tempData[0].firstName,
    lastName:tempData[0].lastName,
    email:tempData[0].email,
    location:['select','Mumbai','Pune','Agra','Noida'],
    Mylocation:tempData[0].Mylocation,
    password:tempData[0].password
  })



  const handleChange = (e, field) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: e.target.value
    }));
  };


  const deleteFromValidUsers=(email)=>{
    tempData=JSON.parse(localStorage.getItem('valid-users'))||[];
    const preExist=tempData.filter((user)=>user.email!==email);
    localStorage.setItem('valid-users',JSON.stringify(preExist));


  }
  

  const handleSubmit=(e)=>{
    const {firstName,lastName,email,Mylocation,location,password}=userData;
    e.preventDefault();
    if(!firstName||!email||!lastName||!location){
      toast.error("Please fill all credentials!!");
    }
    else{
      deleteFromValidUsers(email);
      tempData=JSON.parse(localStorage.getItem('valid-users'))||[];
      localStorage.setItem('valid-users',JSON.stringify([...tempData,{firstName,email,lastName,Mylocation,password,location}]));
      tempData=JSON.parse(localStorage.getItem('valid-users'))||[];
      setUserData({firstName,email,lastName,Mylocation,password,location});
      localStorage.removeItem('myloginuser');
      localStorage.setItem('myloginuser',JSON.stringify([{firstName,email,lastName,Mylocation,password,location}]));
      setContextUser(userData)
      toast.success("Fields have been Updated! " +firstName );
      setEdit(false);
    
    }
    
 
     
    }
   
  

  const handleEdit=(e)=>{
    e.preventDefault();
    setEdit(!edit);
  }
  return (
    <div className='big-sidebar' >
      <ToastContainer position='top-center' theme='dark'/>
      <div className='big-sidebar-profile'>
        <h3>{edit?'Update Profile':'Profile'}</h3>
        <form>
          <input  className='input' placeholder='First name' disabled={!edit} type='text' name='firstName' value={userData.firstName} onChange={(e)=>handleChange(e,'firstName')}/>
          <input  className='input' placeholder='Last name' disabled={!edit} type='text' name='lastname' value={userData.lastName}   onChange={(e)=>handleChange(e,'lastName')} />
          <input   className='input' placeholder='email'  disabled={true}type='text' name='email' value={userData.email}   onChange={(e)=>handleChange(e,'email')}/>
          <select className='input' disabled={!edit} value={userData.Mylocation} name="Mylocation"  onChange={(e)=>handleChange(e,'Mylocation')}>
            {userData.location && userData.location.map((city)=>{
              return(
                <option value={city}>{city}</option>
              )
            })}
          </select>
          <button className='btn btn-hero' onClick={handleEdit}>{!edit?'edit changes':'cancel Edit'}</button>
          <button className={edit?'btn btn-hero':'btn disabled-btn'} disabled={!edit}  onClick={handleSubmit}>save changes</button>
        </form>

      </div>
    </div>
  )
}

export default BigSidebar
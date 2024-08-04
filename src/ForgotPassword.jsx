import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import NoteContext from './NoteContext';
import MyContext from './MyContext';


const Login_Page = () => {

  const initalState={
    name:'',
    email:'',
    Mylocation:'',
    location:['select','Mumbai','Pune','Agra','Noida'],
    password:'',
    isMember:true,
}

let validUsers=JSON.parse(localStorage.getItem('valid-users'))||[];
  const [values,setValues]=useState(initalState);
  console.log(validUsers)


  const handleChange = (e, field) => {
  setValues((prevUserData) => ({
      ...prevUserData,
      [field]: e.target.value
    }));
  };


   const navigate=useNavigate();


   const onSubmit=(e)=>{
    e.preventDefault();
   const  validUsers=JSON.parse(localStorage.getItem('valid-users'))||[];
   const checkUsers=validUsers.filter((user)=>user.email=== values.email);
   if(!values.email){
    toast.warning("please enter your mail");
   }else{
    if(checkUsers.length>0){
      const {firstName,lastName,email,location,Mylocation,password}=checkUsers[0];

    toast.success('your password is '+password);
      }
      else{
        toast.warning("It seems that you are not a member!");
      }
    
    }
  }




 

  return (
    <div className='login_container'>
      <ToastContainer position='top-center'/>
        <div className='login_page'>
           <Logo/> 
            <h2>Password recovery</h2>
            <form>     
            <input type="email" onChange={(e)=>handleChange(e,'email')} value={values.email} name="email" placeholder='email'  className='input-field'/>
            <button className='btn btn-inline' onClick={onSubmit}>Submit</button>
           
            </form>
            <p>Back to login page <Link className='btn-link' to="/login">Login</Link></p>
          
        </div>
    </div>
  )
}

export default Login_Page
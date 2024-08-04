import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate} from 'react-router-dom';
import NoteContext from './NoteContext';
import MyContext from './MyContext';


const Login_Page = () => {
const {contextUser,setContextUser}=useContext(MyContext);
  const initalState={
    name:'',
    email:'',
    Mylocation:'',
    location:['select','Mumbai','Pune','Agra','Noida'],
    password:'',
    isMember:false,
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
    if(!values.isMember){
    if(checkUsers.length>0){
      const {firstName,lastName,email,location,Mylocation,password}=checkUsers[0];
      if(password!==values.password){
        toast.warning("Pssword is incorrect!!");
      }else{
      localStorage.setItem('myloginuser',JSON.stringify([{firstName,lastName,email,location,Mylocation,password }]));
      setContextUser({firstName,lastName,email,location,Mylocation,password });
      navigate("/myprofile");
      }
      
      // navigate("/myprofile",{ state: { firstName,lastName,email,location,Mylocation,password }});
    }else{
      toast.warning("It seems that you are not a member!");
    }
  }
  else{
    if(!values.email || !values.password||!values.name){

      toast.error('Please fill all credentials!') 
    }
    else{
      if(checkUsers.length>0){
        toast.warning("User mail already exist! Please login");
      }else{
      const [firstName,lastName]=values.name.split(' ');
      const {email,password,isMember,location,Mylocation}=values;
      localStorage.setItem('valid-users',JSON.stringify([...validUsers,{firstName,lastName,email,password,isMember,location,Mylocation}]))
      setValues({...values,isMember:false,email:'',password:''});
      toast.success(`Welcome here ${lastName}`)
    }
  }
   }
  }



   const toggleMember=()=>{
    setValues({...values,isMember:!values.isMember});
   }

  return (
    <div className='login_container'>
      <ToastContainer position='top-center'/>
        <div className='login_page'>
           <Logo/> 
            <h2>{values.isMember?"Register":"Login"}</h2>
            <form>

          { values.isMember&& <input type="text" name="name" onChange={(e)=>handleChange(e,'name')} value={values.name} placeholder='enter your name' className='input-field'/>}
     
            <input type="email" onChange={(e)=>handleChange(e,'email')} value={values.email} name="email" placeholder='email'  className='input-field'/>
          
            <input type="password" onChange={(e)=>handleChange(e,'password')} value={values.password} name="password" placeholder='password'  className='input-field' /><br/>
            { values.isMember&& 
            <select className='input-field' name='Mylocation' onChange={(e)=>handleChange(e,'Mylocation')}>
             { values.location.map((city)=>{
                return(
                  <option value={city}>{city}</option>
                )
              })}
              </select>}
            <button className='btn btn-inline' onClick={onSubmit}>Submit</button>
           
            </form>
            <p>{values.isMember?'Already a member?':'Not a member?'}  <button onClick={toggleMember} className='btn-link'>{values.isMember?'login':'register'}</button></p>
            <p>Forgot your Password?  <Link to="/forgotpassword" className='btn-link'>recover</Link></p>
        </div>
    </div>
  )
}

export default Login_Page
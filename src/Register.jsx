import { useState } from "react"

const initalState={
    name:'',
    email:'',
    password:'',
    isMember:true,
}

const Register=()=>{
    const [value,setValue]=useState(initalState);
   const handleChange=(e)=>{
    console.log(e.target);
   }

   const onSubmit=(e)=>{
    e.preventDefault();
    console.log(e.target);
   }
}
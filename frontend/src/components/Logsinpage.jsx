import React from 'react'
import {Link } from 'react-router-dom'
import { useState } from 'react'

function Logsinpage({change,changefun,showtodo,todofun,credfun,cred,val,valfun }) {
 
    
   
const [data,datafun]=useState({email:"",password:""})


const  handlechange=(e)=>{
    const {name,value}=e.target;
 
datafun((prevData) => ({ ...prevData, [name]: value }));

console.log(data)

}
    const formsubmit=async(e)=>{
e.preventDefault();
try{
     const response=await  fetch(change?'http://localhost:3000/login/':'http://localhost:3000/signup/',
     {method:"POST",
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify(data)});
      const res2=  await response.json()
      valfun(res2.status);
     
     console.log(res2.status)
     todofun(res2.bool)
     datafun({email:"",password:""})
     credfun(res2.userid);
     console.log(res2.userid);
     
     }
     catch(error){
        console.log(error)
     }


        
    }
    
  return (
 <div style={{left:"465px",backgroundColor:"white"}} className=' flex flex-col  h-48 w-80 items-center  hover:opacity-75
    justify-center  dark :bg-slate-400  z-50  shadow-2xl shadow-zinc-800 
      relative   top-44 rounded-3xl pb-4  '>

        
<form    className=' flex flex-col gap-3 pt-8'>
        <div><input type="text"  placeholder='Email' name="email"  className='h-10 shadow-xl rounded-xl w-19 text-center hover:bg-slate-300' value={data.email} onChange={handlechange}  required/></div>
        <div><input type="text" placeholder='password'name="password" className='h-10 shadow-xl rounded-xl text-center   hover:bg-slate-300'  value={data.password} onChange={handlechange} required/></div>
        <div><button className=' ring-offset-2 ring-2 ring-slate-200  rounded-xl relative left-16' onClick={formsubmit}  >{change?"LOGIN":"SIGNUP"}</button> </div>
        </form>
       {change? (<h4>Don't have account ?<Link to="/signup"><button onClick={(e)=>{e.preventDefault() 
         changefun(false) ; valfun(null) }} >Sign up</button></Link></h4>):null}
         <h2>{val}</h2>

    </div>
  )
}

export default Logsinpage